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
        <div>
            

            {
                        orderReview.map(order => 
                            <div key={order._id}> 


                           
                            <p>{order.name}</p> 
                            <p>{order.email}</p>
                            <p>{order.address}</p>
                            <h3>{order.city}</h3>
                            <h3>{order.phone}</h3>

                            <button onClick={()=>handleDelete(order._id)}>delete order</button>
                            
                            </div>
                        
                      
                        
                        )
                    }
        </div>
    );
};

export default OrderReview;
