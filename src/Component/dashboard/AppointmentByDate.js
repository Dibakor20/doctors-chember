import React from 'react';

const AppointmentByDate = ({appointment}) => {
    console.log(appointment)
    return (
        <>
            <h3>total Appointment:{appointment.length}</h3>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointment.map(list=> 
                     <tr>
                        <td>{list.name}</td>
                        <td>{list.phone}</td>
                        <td>{list.gender}</td>
                        <td>{list.email}</td>
                      </tr>
                      )
                }
            </tbody>

            </table>

        </>

            

    );
};

export default AppointmentByDate;