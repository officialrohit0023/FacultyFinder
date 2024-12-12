import React from 'react'
import './FacultyCard.css'

export const FacultyCard = ({faculty}) => {
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
              <div className='profile-button'><a href='#'>Find</a></div>
                </center>
              
            </div>
       

    </div>
  )
}
