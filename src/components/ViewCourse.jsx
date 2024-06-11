import React from 'react'
import NavBar from './NavBar'

const ViewCourse = () => {
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
      <th scope="col">Venue</th>
      <th scope="col">Trainer Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MERN stack</td>
      <td>React</td>
      <td>06/11</td>
      <td>10</td>
      <td>Auditorium</td>
      <td>Anish</td>
    </tr>
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewCourse