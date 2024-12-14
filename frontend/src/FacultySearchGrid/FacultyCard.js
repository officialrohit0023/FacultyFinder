import React from 'react'
import './FacultyCard.css'
import {  useNavigate } from 'react-router-dom'
import FacultyProfile from './FacultyProfile';

export const FacultyCard = ({faculty}) => {
  const navigate = useNavigate();
  // Function to navigate to the faculty profile page and pass data
  const goToProfile = () => {
    navigate('/profile', { state: { faculty } }); // Passing faculty data to the new route
  };
  return (
    <div className='upc'>
        
        <div className='gradient'> </div>
            <div className='profile-down'>
                <center>
                    <img src={require(`../../../backend/uploads/${faculty.facultyimage}`)} />
                        <div className='profile-title'>
                {faculty.name}
              </div>
              <div className='profile-description'>
               {faculty.department}
              </div>
              <div className='profile-button'><button onClick={goToProfile}>Find</button></div>
                </center>
              
            </div>
       

    </div>
  )
}
