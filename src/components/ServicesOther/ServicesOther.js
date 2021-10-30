import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const ServicesOther = () => {

    const [ServicesOther, setServicesOther] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
             
                setServicesOther(data);
            })
    }, [])
    return (
        <section id="book-ride" className="mt-5 container">
          
            <h2 className="fw-bolder my-5 text-info">Medical Services</h2>
           
            <div className="row">
                {
                   
                    ServicesOther.map(ServicesOther => <Product ServicesOther={ServicesOther}></Product>)
                }
            </div>
        </section>
    );
};

export default ServicesOther;