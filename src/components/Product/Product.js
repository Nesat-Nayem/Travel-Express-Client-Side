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
        <div className="product">

            {/* bootstrap card */}

          
            {/* <div class="mb-5 col-lg-4 col-sm-6">
                <div className="card shadow-lg w-100 h-100 text-center rounded ServicsCard">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>{price}</p>
                    
                
                
                    </div>

                </div>
                
                </div> */}

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
                            
                            <p class="card-text">{description}</p>
                            <h2>$ {price}</h2>
                            <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                           

                     <div className="d-flex justify-content-between ">
                            
                    <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn bg-color ms-5"
                     ><FontAwesomeIcon icon={faShoppingCart} /> Booking</button>


                    <Link to={`/servicesdetail/${_id}`}>
                        <button className="btn bg-color2 ms-5">View Details</button>         
                    </Link>

                    </div>


                  

                        </div>
                        </div>
                    </div>
                </div>

            {/* bootstrap card */}
            {/* <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small className="text-danger">by: {shortdes}</small></p>
                
                <p><small>only {description} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>

                    <Link to={`/servicesdetail/${_id}`}>
                    <h6 className="btn text-info">View Details <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></h6>         
                    </Link>
            </div> */}


        </div>
    );
};

export default Product;