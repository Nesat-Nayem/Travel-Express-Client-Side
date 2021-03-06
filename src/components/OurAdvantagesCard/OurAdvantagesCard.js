import React from 'react';
import './OurAdvantagesCard.css'

const OurAdvantagesCard = (props) => {
    
    const { name,positon, photoURL } = props.OurAdvantage;

    return (
        <div className="mb-3 col-lg-3 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="card-body text-start">
                    <img className="img-fluid mb-5" src={photoURL} alt="" />
                   
                    <h6 className="card-title name-color fw-bolder">{name}</h6>
                    
                    <p className="fw-bolder">{positon}</p>
                </div>
                
            </div>
        </div>
    );
};

export default OurAdvantagesCard;