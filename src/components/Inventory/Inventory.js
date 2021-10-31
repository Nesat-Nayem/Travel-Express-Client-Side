import React, { useEffect, useState } from 'react';
import './Inventory.css'
const Inventory = () => {
    const [inventores, setInventores] = useState([]);
    useEffect(()=>{
        fetch('https://chilling-citadel-66740.herokuapp.com/products')
    .then(res => res.json())
    .then(data => setInventores(data.products))
    },[])

    const handleDelete = id => {
        const url = `https://chilling-citadel-66740.herokuapp.com/products/${id}`;
        fetch(url,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('delete successfully')

                const remaining = inventores.filter(inventory => inventory._id !== id);
            setInventores(remaining);
            }

            
        })
    }
    return (
        <div className="row">
            <h2 className="text-center mb-5">Manage All Packages</h2>

        {
            inventores.map(inventory => <div
                className="col-md-4" 
            key={inventory._id}>

                <div className="col">
                    <div className="card">
                    <img className="img-fluid" src={inventory.img} alt="" />
                    <div className="card-body d-flex justify-content-between">
                <p>{inventory.name}</p>

                <button className="butnn btn" onClick={()=> handleDelete(inventory._id)}>delete Package</button>
                </div>
               
                </div>
                
                </div>
                
            </div>)
        }
       

        </div>
    );
};

export default Inventory;







