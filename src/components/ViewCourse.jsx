import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewCourse = () => {
    const[course,changeCourse] = useState([])
    const fetchData = ()=>{
        axios.post("http://localhost:8080/view").then((response)=>{
            changeCourse(response.data)
        }).catch((error)=>{
            alert(error.message)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   
                <table class="table">
  <thead>
    <tr>
      <th scope="col">Course Title</th>
      <th scope="col">Course Description</th>
      <th scope="col">Course Date</th>
      <th scope="col">Course Duration</th>
      <th scope="col">Cource Venue</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody>
    {course.map((value,index)=>{
        return <tr>
        <td>{value.courseTitle}</td>
        <td>{value.courseDescription}</td>
        <td>{value.courseDate}</td>
        <td>{value.courseDuration}</td>
        <td>{value.courseVenue}</td>
        <td>{value.trainerName}</td>
      </tr>
    })}
    
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCourse