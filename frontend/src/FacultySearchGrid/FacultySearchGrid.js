import React from 'react'
import axios from 'axios'
import './FacultySearchGrid.css'
import { useEffect, useState} from 'react'
import { FacultyCard } from './FacultyCard'
import Navbar from '../Navbar'
import Home from '../pages/Home'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

export const FacultySearchGrid = () => {
     const [loggedInUser, setLoggedInUser] = useState('');
    const [faculties,setFaculties]=useState([])
    const navigate = useNavigate();
        useEffect(() => {
            setLoggedInUser(localStorage.getItem('loggedInUser'))
        }, [])
    
        const handleLogout = (e) => {
            localStorage.removeItem('token');
            localStorage.removeItem('loggedInUser');
            handleSuccess('User Loggedout');
            setTimeout(() => {
                navigate('/login');
            }, 1000)
        }
    useEffect(()=>{
        axios.get('http://localhost:8080/getFaculties')
        .then(faculties => setFaculties(faculties.data.data))
        .catch(err => console.log(err))
    },[])

  return (
    <div>
        <p>{console.log(faculties)}</p>
        <div> <Navbar /></div>
        
        <div  className='grid'>
            {faculties.map((faculty)=>(
            <FacultyCard key={faculty._id} faculty={faculty} />
        ))}
        <button onClick={handleLogout}>Logout</button>
        </div>
         <ToastContainer />
    </div>
  )
}
