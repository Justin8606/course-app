import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchCourse = () => {
    const [data,changeData] = useState(
        {
            "courseTitle":""
    }
)
    const [result,getResult] = useState([])

    const inputHandler = (event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                getResult(response.data)
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label" ></label>
                                <input type="text" className="form-control" name="courseTitle" value={data.courseTitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue} >Search</button>
                        </div>
                    </div>
                </div>
            </div>

        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className='table'>
                    <thead>
                        <tr>
                        <th>_id</th>
                        <th>courseTitle</th>
                        <th>courseDescription</th>
                        <th>courseDate</th>
                        <th>courseDuration</th>
                        <th>courseVenue</th>
                        <th>trainerName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((value,index)=>{
                            return <tr>
                            <td>{value._id}</td>
                            <td>{value.courseTitle}</td>
                            <td>{value.courseDescription}</td>
                            <td>{value.courseDate}</td>
                            <td>{value.courseDuration}</td>
                            <td>{value.courseVenue}</td>
                            <td>{value.trainerName}</td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
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

export default SearchCourse