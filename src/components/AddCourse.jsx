import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddCourse = () => {
    const[data,getCourse] = useState(
        {
            "courseTitle":"",
            "courseDescription":"",
            "courseDate":"",
            "courseDuration":"",
            "courseVenue":"",
            "trainerName":""
        }
    )
    const inputHandler = (event)=>{
        getCourse({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        // console.log(data)
        axios.post("http://localhost:8080/add",data).then((response)=>{
            if (response.data.status==="success") {
                alert("added succesfully")
            } else {
                alert("error")
            }
        }).catch()
    }
  return (
    <div>
    <NavBar/>

<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label action="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='courseTitle' value={data.courseTitle} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label action="" className="form-label">Course Description</label>
                        <input type="text" className="form-control" name='courseDescription' value={data.courseDescription} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label action="" className="form-label">Course Date</label>
            
                        <input type="text" className="form-control" name='courseDate' value={data.courseDate} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label action="" className="form-label">Course Duration</label>
                        <input type="text" className="form-control" name='courseDuration' value={data.courseDuration} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label action="" className="form-label">Venue</label>
                        <input type="text" className="form-control" name='courseVenue' value={data.courseVenue} onChange={inputHandler}/>
                        
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label action="" className="form-label">Trainer Name</label>
                        <input type="text" className="form-control" name='trainerName' value={data.trainerName} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-success" onClick={readValue}>Submit</button>

                        </div>
                       
                        
                        
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default AddCourse