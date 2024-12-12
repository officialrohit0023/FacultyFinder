import React from 'react'
import axios from 'axios'
import './FacultySearchGrid.css'
import { useEffect, useState} from 'react'
import { FacultyCard } from './FacultyCard'

export const FacultySearchGrid = () => {
    const [faculties,setFaculties]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/getFaculties')
        .then(faculties => setFaculties(faculties.data.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div className='grid'>
        <p>{console.log(faculties)}</p>
        {faculties.map((faculty)=>(
            <FacultyCard key={faculty._id} faculty={faculty} />
        ))}
        </div>
  )
}
