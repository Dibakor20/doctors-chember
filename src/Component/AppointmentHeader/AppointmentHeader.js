import React from 'react';
import mask1 from '../../imeges/Mask Group 1.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <>
         <div className="container">
         <div style={{height:"600px"}} className="row d-flex align-items-center">
              <div className="col-md-6">
                <h1>Appointment</h1> 
                <div className="mt-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
            
              </div>
              <div className="col-md-6">
                <img src={mask1} alt="" className="img-fluid"/>
              </div>
          </div>
          </div>   
        </>
    );
};

export default AppointmentHeader;