import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Doctor from '../../Component/Doctors/Doctor';
import Header from '../../Component/Header/Header';
import './Home.css'

const Home = () => {
    return (
        <>
         <div className="header-background">
          <Header/> 
          <Banner/>
        <Doctor/>
          </div>   
        </>
    );
};

export default Home;