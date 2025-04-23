import React, { useContext } from 'react'
import { Link } from 'react-router'
import DataContext from '../context/DataContext'

const Table = () => {

    const { students, handleEdit, handleDelete } = useContext(DataContext)
    
    
    return (
        <div className="table-container">
            <h3 className='table-label'>Students Details</h3>
            <br />
            <Link to="/" className='show-form'>Show Form</Link>
            {
                students.length === 0 ? (
                    <p className='no-student'>No students details.</p>

                ) : (
                    <table className="table-data" border="1" cellPadding="8">
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
                                        <Link to="/" style={{ textDecoration: "none" }}>
                                            <button
                                                className='edit-button'
                                                type="submit"
                                                onClick={() => handleEdit(stu)}>

                                                Edit
                                            </button>
                                        </Link>

                                        <Link to="/table" style={{ textDecoration: "none" }}>
                                            <button
                                                className='edit-button'
                                                type="submit"
                                                onClick={() => handleDelete(stu.id)}>
                                                Delete
                                            </button>
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