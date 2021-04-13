import React from 'react';
import img from '../../imeges/Ellipse 1.png'


const Doctors = ({allDoctor}) => {
    console.log(allDoctor)
    return (
        <>
          <div className="col-md-4 col-sm-6 text-center">
        {
            allDoctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${allDoctor.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/doctors/${allDoctor.img}`} alt=""/>
        }
            <h4>{allDoctor.name}</h4>
            <p> +880-188-934789</p>
        </div>
        </>
    );
};

export default Doctors;