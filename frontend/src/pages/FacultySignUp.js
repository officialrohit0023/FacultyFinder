import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function FacultySignUp() {

    const [facultysignupInfo, facultysetSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        department:'',
        facultyimage:null,
        timetable:null
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value ,files } = e.target;
        console.log(name, value);
        const copyfacultySignupInfo = { ...facultysignupInfo };
        if(files){
            copyfacultySignupInfo[name]=files[0];
        }
        else{
             copyfacultySignupInfo[name] = value;
        }
        facultysetSignupInfo(copyfacultySignupInfo);
    }

    const handleFacultySignup = async (e) => {
        e.preventDefault();
        const { name, email, password ,department, facultyimage, timetable} = facultysignupInfo;
        if (!name || !email || !password || !department || !facultyimage || !timetable) {
            return handleError('name, email and password are required')
        }

        const formData = new FormData();
        formData.append("name", facultysignupInfo.name);
        formData.append("email", facultysignupInfo.email);
        formData.append("password", facultysignupInfo.password);
        formData.append("department", facultysignupInfo.department);
        formData.append("facultyimage", facultysignupInfo.facultyimage);
        formData.append("timetable", facultysignupInfo.timetable);


        try {
            const url = `http://localhost:8080/auth/facultysignup`;
            const response = await fetch(url, {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                // body: JSON.stringify(facultysignupInfo)
                 body : formData
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }
    return (
        <div className='container'>
            <h1>Faculty Signup</h1>
            <form onSubmit={handleFacultySignup} encType="multipart/form-data">
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={facultysignupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={facultysignupInfo.email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='Enter your password...'
                        value={facultysignupInfo.password}
                    />
                </div>
                <div>
                    <label htmlFor='department'>Department</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='department'
                        placeholder='Enter your department...'
                        value={facultysignupInfo.department}
                    />
                </div>
                <div>
                    <label htmlFor='facultyimage'>Faculty Image</label>
                    <input
                        onChange={handleChange}
                        type='file' accept='image/*'
                        name='facultyimage'
                       
                        // value={facultysignupInfo.facultyimage}
                    />
                </div>
                <div>
                    <label htmlFor='timetable'>Upload Time-Table</label>
                    <input
                        onChange={handleChange}
                        type='file' accept='image/*'
                        name='timetable'
                        // placeholder=''
                        // value={facultysignupInfo.timetable}
                    />
                </div>
                <button type='submit'>Signup</button>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FacultySignUp;
