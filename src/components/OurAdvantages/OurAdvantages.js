import React, { useEffect, useState } from 'react';
import './OurAdvantages.css'
import OurAdvantagesCard from '../OurAdvantagesCard/OurAdvantagesCard';

const OurAdvantages = () => {

    const [OurAdvantages, setOurAdvantages] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        
        fetch('./OurAdvantages.json')

            .then(res => res.json())
                
            .then(reviews => setOurAdvantages(reviews))               
            
         }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
            
                <div className="my-5 text-start">
                <h5 className=" fw-fw-bolder activ">We Tech The Next Level.</h5>
                <h1 className=" ">Why Travel with tour express?</h1>
                </div>
               
                <div className="row">
                                                  
                    {
                        OurAdvantages.map(OurAdvantage => <OurAdvantagesCard OurAdvantage={OurAdvantage}></OurAdvantagesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurAdvantages;