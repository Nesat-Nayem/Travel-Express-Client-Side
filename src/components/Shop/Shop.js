import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';

import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Blog from '../Blog/Blog'
import OurAdvantages from '../OurAdvantages/OurAdvantages';

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    const [page,setPage] = useState(0);
   
    const [displayProducts, setDisplayProducts] = useState([]);
   

    useEffect(() => {
       

        fetch('https://chilling-citadel-66740.herokuapp.com/products')

          .then(res => res.json())
            .then(data => {
                

                setProducts(data.products);
                setDisplayProducts(data.products);

            });
    }, [page]);



    const handleAddToCart = (product) => {
   
       
        addToDb(product.key);

    }


    return (
        <>
        <div className="container">
        <Slider></Slider>
       

            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            
                        >
                        </Product>)
                    }
                    
                </div>
               
            </div>

        
            <Blog></Blog>

            <OurAdvantages></OurAdvantages>

            </div>

        </>
    );
};

export default Shop;