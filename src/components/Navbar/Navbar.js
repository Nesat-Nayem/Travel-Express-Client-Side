import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import useAuth from '../../hooks/useAuth';
import useAuth from '../../hooks/useAuth';
const Navbar = () => {
    const {logOut, user} = useAuth();
    // console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light py-5">
                <div className="container">
                    <div className="d-flex">
                       
                        <h1 className="navbar-brand site_name">Tour Express</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/shop" className="nav-link fw-bold">Home</Link>

{/*                             
                            <Link to="/LocationsDirections" className="nav-link fw-bold">My Events</Link> */}
                            
                                 {/* <Link to="/AdvancedTechnologies" className="nav-link fw-bold">Manage All Event</Link> */}

                                { user.email?
                                <Link to="/review"
                                className="nav-link fw-bold"
                                >My booking</Link>: <div></div>

                                }

                                { user.email?
                                <Link to="/inventory"
                                className="nav-link fw-bold"
                                >Manage Packages</Link>: <div></div>

                                }
                                



                                { user.email?
                                <Link to="/AddPackage"
                                className="nav-link fw-bold"
                                >Add Package </Link>: <div></div>

                                }




                                 <h6 className="mt-2 mx-3"> {user.displayName} </h6>
                                 
                            { user.email?
                                <Link to="/login">
                                <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link> 
                                
                                // &&
                                //  <Link >
                                // <button>Meadd</button>
                                // </Link>


                                :
                                <Link to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </Link>
                                
                                // &&
                                // <Link to="/login">
                                // <button className="btn btn-Primary me-2" >I Added Log In</button>
                                // </Link>

                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;