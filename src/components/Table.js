import React, { useContext } from 'react'
import { Link } from 'react-router'
import DataContext from '../context/DataContext'
import { FaEdit } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

const Table = () => {

    const { students, handleEdit, handleDelete } = useContext(DataContext)
    
    
    return (
        <div className="table-container">
            {
                students.length === 0 ? (
                    <p className='no-student'>No students details.
                    <Link to="/">View Form</Link>
                    </p>
                    

                ) : (
                    <table className="table-data" cellSpacing={0} border={1}>
                        <thead className='table-head'>
                            <tr>
                                <th>S.no</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {students.map((stu, index) => (
                                <tr key={stu.id}>
                                    <td>{index + 1}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.age}</td>
                                    <td>{stu.email}</td>
                                    <td>
                                        <Link to="/">
                                            <FaEdit
                                                className='edit-button'
                                                type="submit"
                                                onClick={() => handleEdit(stu)}
                                                />
                                            
                                        </Link>

                                        <Link to="/table" style={{ textDecoration: "none" }}>
                                            <FaTrash
                                                className='edit-button'
                                                type="submit"
                                                onClick={() => handleDelete(stu.id)}
                
                                            />
                                        </Link>
                                    </td>
                                </tr>

                            ))}
                        </tbody>

                    </table>

                )
            }

        </div>
    )
}


export default Table