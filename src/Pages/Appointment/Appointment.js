import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import AppointmentHeader from '../../Component/AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../../Component/BookingAppointment/BookingAppointment';
import Header from '../../Component/Header/Header';


const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const handleDateChange = date =>{
        setSelectedDate(date)
    }
    return (
        <>
        <div className="mb-5">
         <Header/>
         <AppointmentHeader handleDateChange={handleDateChange}/>
         <BookingAppointment date={selectedDate}/>
         </div>
         
        </>
    );
};

export default Appointment;