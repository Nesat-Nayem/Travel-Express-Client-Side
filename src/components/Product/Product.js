import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import './Product.css';
import Rating from 'react-rating';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { name, img, shortdes, price, description,location, star, _id, key } = props.product;

    return (
        
        <div>
           
           <div className="product">

                {/* bootstrap card */}
         
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p><i class="fas fa-map-marker-alt"></i>  {location}</p>

                            <Rating
                                initialRating={star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly>

                            </Rating>

                            
                            <p class="card-text mt-4">{description}</p>
                            <h2>$ {price}</h2>
                            
                           

                     <div className="d-flex justify-content-end ">
                 


                    <Link to={`/servicesdetail/${_id}`}>
                        <button className="btn bg-color ms-5">Booking</button>         
                    </Link>

                    </div>


                  

                        </div>
                        </div>
                    </div>
                </div>

                </div>

        </div>
    );
};

export default Product;