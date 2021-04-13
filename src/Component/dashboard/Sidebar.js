import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [user,setUser]= useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])
    return (
        <>
        <nav class="navbar navbar-expand-lg sidebar col-md-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="list-unstyled">
            <li >
                <Link to="/home" class="nav-link text-white ml-5" href="#">Home<span class="sr-only">(current)</span></Link>
            </li>
            <li >
                <Link to="/dashboard" class="nav-link text-white ml-5" href="#">Dashboard <span class="sr-only">(current)</span></Link>
            </li>
            <li >
                <Link to="/appointmentList" class="nav-link text-white ml-5" href="#">Appointment <span class="sr-only">(current)</span></Link>
            </li>
          { isDoctor &&
              <div>
                    <li >
                <a class="nav-link text-white ml-5" href="#">Patients <span class="sr-only">(current)</span></a>
            </li>
            <li >
                <a class="nav-link text-white ml-5" href="#">Pescription<span class="sr-only">(current)</span></a>
            </li>
            <li >
                <Link to="/addDoctor" class="nav-link text-white ml-5" href="#">Add Doctors <span class="sr-only">(current)</span></Link>
            </li>
            <li >
                <a class="nav-link text-white ml-5" href="#">Setting<span class="sr-only">(current)</span></a>
            </li>
           
           
              </div>
          }
            </ul>
        </div>
        </nav>
        </>
    );
};

export default Sidebar;