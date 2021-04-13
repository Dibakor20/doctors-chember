import React, { useEffect, useState } from 'react';
import Doctors from './Doctors';

const Doctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <>
             <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                     doctors.map(allDoctor =><Doctors key={allDoctor._id} allDoctor={allDoctor} />)
                    }
                    
                </div>
            </div>
        </section> 
        </>
    );
};

export default Doctor;