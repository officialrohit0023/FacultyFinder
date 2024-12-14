import React from 'react';
import './FacultyProfile.css'; // Import the CSS file for styling
import { useLocation } from 'react-router-dom';

const FacultyProfile = () => {
    const location = useLocation();
  const { faculty } = location.state; // Get faculty data passed from FacultyCard

  // Sample teacher data
//   const teacher = {
//     name: 'John Doe',
//     department: 'Computer Science',
//     email: 'johndoe@university.edu',
//     about: 'Passionate about teaching and technology.',
//     profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg', // Placeholder image for profile
//     timetable: 'https://tse3.mm.bing.net/th?id=OIP.88NZZeSsxW1Od8TIP6_-WwHaFN&pid=Api&P=0&h=180', // Placeholder timetable image
//   };

  return (
    <div className="teacher-profile-container">
      <div className="teacher-profile-card">
        <div className="profile-header">
          <img
            src={require(`../../../backend/uploads/${faculty.facultyimage}`)}
            alt="Teacher Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h2 className="teacher-name">{faculty.name}</h2>
            <p className="teacher-department">{faculty.department}</p>
            <p className="teacher-email">{faculty.email}</p>
          </div>
        </div>
        <div className="teacher-about">
          <h3>About</h3>
          {/* <p>{teacher.about}</p> */}
        </div>
        <div className="teacher-timetable">
          <h3>Timetable</h3>
          <img
            src={require(`../../../backend/uploads/${faculty.timetable}`)}
            alt="Timetable"
            className="timetable-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
