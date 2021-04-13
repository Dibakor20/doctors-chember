import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking,date}) => {
   
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <>
      
          <div class="card mb-5">
            <div class="card-body">
                <h5 class="card-title text-center">{booking.subject}</h5>
                <h6 class="text-center">{booking.visitingHour}</h6>
                <p class="card-text text-center">{booking.totalSpace} space available</p>
                <button onClick={openModal} className="btn btn-primary d-block mx-auto">Book Appointment</button>
                <AppointmentForm subject={booking.subject} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}/>
                
            </div>
          </div>
         
        </>
    );
};

export default BookingCard;