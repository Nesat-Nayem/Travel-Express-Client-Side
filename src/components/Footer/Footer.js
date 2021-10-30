import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { faMapMarkerAlt, faMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import FooterQuickLinks from '../FooterQuickLinks/FooterQuickLinks';

const Footer = () => {
    return (
        <footer className="bg-danger py-5 mt-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center text-white">
                    <div className="col-md-4 d-flex">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:'40px'}} />
                        <p className="ms-2 fw-bolder">2005 Stokes Isle Apt. 896,
                            Venaville 10010, USA</p>
                    </div>
                    <div className="col-md-4 ">
                        <h4>Connect Us</h4>
                        <div>
                            <FooterQuickLinks></FooterQuickLinks>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p>We Are American academic medical center based in Cleveland, . Owned and operated by the Cleveland Clinic Foundation, an Ohio nonprofit corporation established in 1921,</p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;