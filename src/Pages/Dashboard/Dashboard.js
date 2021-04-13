import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../../Component/dashboard/AppointmentByDate';
import Sidebar from '../../Component/dashboard/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../App';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [appointment, setAppointment] = useState([])
  const handleDateChange = date => {
    setSelectedDate(date)
  }

  useEffect(() => {
    fetch('http://localhost:5000/appointmentsByDate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: selectedDate, email: user.email })
    })
      .then(res => res.json())
      .then(data => setAppointment(data))
  }, [selectedDate])

  return (
    <>
      <div className=" row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5">
          <AppointmentByDate appointment={appointment} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;