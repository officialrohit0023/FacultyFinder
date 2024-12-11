import React from 'react'
import './Start.css';
import { useNavigate } from 'react-router-dom'
import { FacultyCard } from '../FacultySearchGrid/FacultyCard';
function Start() {
  const navigate = useNavigate();
  function studentRedirect(){
      navigate('/login')
  }
  function facultyRedirect(){
    navigate('/facultysignup')
}


  return (
    <div>
        <button onClick={studentRedirect} className='startButton'>
            
            Student
        </button>
        <FacultyCard />
        <button onClick={facultyRedirect} className='startButton'>
            Faculty
        </button>
    </div>

  )
}
export default Start;
