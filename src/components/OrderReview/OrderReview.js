import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const OrderReview = () => {

 
    const [orderReview,setOrderReview] = useState([])

    useEffect(()=>{
        fetch('https://chilling-citadel-66740.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrderReview(data))
    }, []);

    const handleDelete = id => {
        
        fetch(`https://chilling-citadel-66740.herokuapp.com/orders/${id}`, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = orderReview.filter(order => order._id !==id);
            setOrderReview(remaining)
            }
            
        })
    }

    return (
        <div className="row">
            
            <h1 className="text-center">All Orders</h1>

            {
                        orderReview.map(order => 
                            <div key={order._id}> 

                        <div className="card">
                        <div className="card-body">
                        
                           
                            <p>{order.name}</p> 
                            <p>{order.email}</p>
                            <p>{order.address}</p>
                            <h3>{order.city}</h3>
                            <h3>{order.phone}</h3>

                            <button className="btn btn-danger" onClick={()=>handleDelete(order._id)}>delete order</button>
                            </div>
                            </div>
                            
                            </div>
                        
                      
                        
                        )
                    }
        </div>
    );
};

export default OrderReview;




{/* <div className="col">
                    <div className="card">
                    <img className="img-fluid" src={inventory.img} alt="" />
                    <div className="card-body d-flex justify-content-between">
                <p>{inventory.name}</p>

                <button className="butnn btn" onClick={()=> handleDelete(inventory._id)}>delete Package</button>
                </div>
               
                </div>
                
                </div> */}