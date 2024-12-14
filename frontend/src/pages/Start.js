import React from 'react'
import './Start.css';
import { useNavigate } from 'react-router-dom'
import { FacultyCard } from '../FacultySearchGrid/FacultyCard';
import Navbar from '../Navbar';
import FacultyProfile from '../FacultySearchGrid/FacultyProfile';
function Start() {
  const navigate = useNavigate();
  function studentRedirect(){
      navigate('/login')
  }
  function facultyRedirect(){
    navigate('/facultysignup')
}


  return (
    <div className='nav'>
        <div ><Navbar /></div>
        <button onClick={studentRedirect} className='startButton'>
            
            Student
        </button>
        <button onClick={facultyRedirect} className='startButton'>
            Faculty
        </button>
        
    </div>

  )
}
export default Start;
