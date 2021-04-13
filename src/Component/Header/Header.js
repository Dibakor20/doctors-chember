import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import { UserContext } from '../../App';

const Header = () => {
    const [user,setUser] = useContext(UserContext)
    return (
        <> 
         <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-4">
                  <Link to="/home"><a class="nav-link" href="#">Home </a></Link>
                </li>
                <li class="nav-item mr-4">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item mr-4">
                    <Link to="/dashboard" class="nav-link" href="#">Dashboard</Link>
                </li>
                <li class="nav-item mr-4">
                    <a class="nav-link " href="#">Review</a>
                </li>
                <li class="nav-item mr-4">
                    <a class="nav-link " href="#">Blog</a>
                </li>
                <li class="nav-item mr-4">  {
                 user.email ? <button className="btn log" >{user.email}</button> : <Link className="btn log " to="/login">LogIn</Link>
            }
                </li>
                </ul>
            </div>
          </nav>  
          </div>
        </>
    );
};

export default Header;