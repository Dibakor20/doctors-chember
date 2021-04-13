import React from 'react';
import mask1 from '../../imeges/Mask Group 1.png'
import {Link} from "react-router-dom"
const Banner = () => {
    return (
        <>
          <div className="container">
          <div style={{height:"600px"}} className="row d-flex align-items-center">
              <div className="col-md-6">
                <h1>Your New Smile<br/> start here</h1> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, maxime! Quas numquam, laudantium voluptas voluptate nihil tenetur perferendis maiores tempora corrupti dignissimos, magnam quibusdam? Dolorem officia dolore deserunt voluptates eum!</p>  
               <Link to="/appointment"> <button className="btn btn-primary">Get Appointment</button></Link>
              </div>
              <div className="col-md-6">
                <img src={mask1} alt="" className="img-fluid"/>
              </div>
          </div>
          </div>  
        </>
    );
};

export default Banner;