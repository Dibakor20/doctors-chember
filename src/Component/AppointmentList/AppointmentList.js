import React from 'react';
import Sidebar from '../../Component/dashboard/Sidebar';

const AppointmentList = () => {
    return (
        <>
       <div className="row">
           <div className="col-md-2">
           <Sidebar/>
           </div>
           <div className="col-md-10">
               <h3>AppointmentList</h3>
           </div>
       </div>
         
        </>
    );
};

export default AppointmentList;