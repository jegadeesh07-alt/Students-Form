import { createContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import React, { useEffect } from 'react';

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [student, setStudent] = useState({
        name: '',
        age: '',
        email: ''
    });
    const [students, setStudents] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState(null)

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:3200/students')
            setStudents(response.data)
        } catch (err) {
            console.error('error fetching students', err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEdit = (studentData) => {

        setStudent({
            name: studentData.name,
            age: studentData.age,
            email: studentData.email,
        })
        setEditingId(studentData.id)
        setIsEditing(true)
    }

    const handleDelete = async (id) => {
        console.log('Deleting student with id:', id);
        try {
            await axios.delete(`http://localhost:3200/students/${id}`)
            setStudents(prev => prev.filter(student => student.id !== id))
        } catch (err) {
            console.error('Delete error', err)
            alert('Failed to delete student')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditing) {
            try {
                await axios.put(`http://localhost:3200/students/${editingId}`, student)
                setIsEditing(false)
                setEditingId(null)
                setStudent({ name: '', age: '', email: '' })
                fetchStudents()
            } catch (err) {
                console.erroe('Update error', err)
                alert('Failed to update student')
            }
        } else {
            try {
                await axios.post('http://localhost:3200/students', student)
                setStudent({ name: '', age: '', email: '' })
                fetchStudents()
            } catch (err) {
                console.error('Add error:', err);
                alert('Failed to add student.');
            }
        }
        console.log("Student in Form:", student)

    }

    return (
        <DataContext.Provider value={{
            student, handleChange, handleSubmit,
            students, handleEdit, setStudent,
            fetchStudents, handleDelete, isEditing

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext