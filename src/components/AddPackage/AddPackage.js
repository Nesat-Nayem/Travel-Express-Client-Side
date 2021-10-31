import axios from 'axios'
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://chilling-citadel-66740.herokuapp.com/products',data)
        .then(res => {
           if(res.data.insertedId){
               alert('added package successfully');
               reset()
           }
        })

    
    };


    return (
        <div className="add-services">
            <h2 className="text-center mb-5">Please Added Packages</h2>


            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <input {...register("location")} placeholder="location" />
      <textarea {...register("description")} placeholder="description" />
      <input {...register("star")} placeholder="rating star" />

      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="image url" />
      <input type="submit" />
    </form>

        </div>
    );
};

export default AddPackage;