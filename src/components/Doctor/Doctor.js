import React, { useEffect, useState } from 'react';
import './Doctor.css'
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctor = () => {

    const [Doctors, setDoctors] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        
        fetch('./doctor.json')

            .then(res => res.json())
                
            .then(reviews => setDoctors(reviews))               
            
         }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
            
                <div className="my-5 text-start">
                <h5 className=" fw-fw-bolder activ">We are achieve the success.</h5>
                <h1 className=" ">Why Travel with tore?</h1>
                </div>
               
                <div className="row">
                                                  
                    {
                        Doctors.map(Doctor => <DoctorCard Doctor={Doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;