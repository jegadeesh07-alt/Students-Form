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
            
           
            <form className='student-form' onSubmit={handleSubmit} style={{ padding: '1rem' }}>
                <div className="logo">
                      <img className="log-image" src="https://www.yuvakabaddi.com/_next/image?url=https%3A%2F%2Fstatic.yuvakabaddi.com%2Fimages%2Fteam-logos%2F672.png&w=640&q=75" alt="can't reload " />
                     </div>
            <h1 className='student-heading'>Student Registration</h1>
                <div className='form-content'>
                        <label className="label1">Full Name</label>
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
                <label className="label2">Date of Birth</label>
                    <input
                        className='textbox-2'
                        type="date"
                        name="age"
                        value={student.age}
                        onChange={handleChange}
                        required
                        placeholder='Enter your DOB'
                    />
                </div>
                <div>
                <label className="label3">E-Mail</label>
                    <input
                        className='textbox-3'
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter your E-mail'
                    />
                </div>
                <button
                    className='submit-button'
                    type="submit">
                    {isEditing ? 'Save' : 'Submit'}
                </button>
                <Link to="/table" className="show-table">View Students</Link>
            </form>

            


        </div>


    )
}

export default StudentForm;
