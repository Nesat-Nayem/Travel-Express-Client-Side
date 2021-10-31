import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shipping from '../Shipping/Shipping';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        
        fetch('https://chilling-citadel-66740.herokuapp.com/products')

        .then(res => res.json())
        .then(data => setData(data.products))
    },[])

    const ExactIteam = data.filter(td => td._id === id);
  
    return (
        <div className="container d-flex">


            {/* card start */}

        <div className="col-md-6">

            <h1 className="text-center text-success my-5">Explore Details </h1>
            <div className="container mb-5 col-lg-10 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded ServicsCard text-start">
            <img src={ExactIteam[0]?.img} alt="" />
            <h3 className="text-start text-info ms-5 py-3">{ExactIteam[0]?.name}</h3>
           
            <p className="text-start w-75 ms-5 pb-5">{ExactIteam[0]?.description}</p>
            
            </div>
            </div>

        </div>

        {/* secend card */}

        <div className="col-md-6">

            <h1 className="text-end me-4">Place Your order</h1>

           <Shipping></Shipping>

        </div>

        {/* card finish */}


        </div>

       
    );
};

export default ServiceDetail;