import { useContext } from "react";
import { Link } from "react-router";
import DataContext from "../context/DataContext";

const StudentForm = () => {

    const context = useContext(DataContext)

    if (!context || !context.student) {
        return <p>loding form...</p>
    }

    const { handleChange, handleSubmit, student, isEditing } = context
    return (
        <div style={{ padding: '1rem' }}>
            <h1 className='student-heading'>Student Registration</h1>
            <form className='student-form' onSubmit={handleSubmit} style={{ padding: '1rem' }}>
                <div className='form-content'>

                    <input
                        className='textbox-1'
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                        required
                        placeholder='Enter your Name'
                    />
                </div>
                <div>

                    <input
                        className='textbox-2'
                        type="number"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        required
                        placeholder='Enter your age'
                    />
                </div>
                <div>

                    <input
                        className='textbox-3'
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter your Email'
                    />
                </div>
                <button
                    className='submit-button'
                    type="submit">
                    {isEditing ? 'Save' : 'Submit'}
                </button>
            </form>

            <Link to="/table" className="show-tabel">View Students</Link>


        </div>


    )
}

export default StudentForm;
