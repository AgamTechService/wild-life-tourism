import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { MdMarkEmailUnread, MdOutlineHomeWork } from "react-icons/md";

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footerContent">
                    <div className="company-details">
                        <h1 className="footerHeader">Company Name</h1>
                        <Link className="company-about"><MdOutlineHomeWork /><p>Address</p></Link>
                        <Link className="company-about"><FaPhoneAlt /><p>+91 0123456789</p></Link>
                        <Link className="company-about"><MdMarkEmailUnread /><p>Email@gmail.com</p></Link>
                    </div>

                    <div className="nationalPark-details">
                        <h1 className="footerHeader">National Parks</h1>
                    </div>

                    <div className="wildTours-details">
                        <h1 className="footerHeader">Wild Tours</h1>
                    </div>

                    <div className="about-details">
                        <h1 className="footerHeader">About info</h1>
                        <Link className="company-about">About</Link>
                        <Link className="company-about">Privacy Policy</Link>
                        <Link className="company-about">Disclaimer</Link>
                        <Link className="company-about">Terms & Condition's</Link>
                        <Link className="company-about">Contact</Link>
                    </div>
                </div>
                <form className="footer-form">
                    <h2 className="footer-enquiry">Enquiry Now!</h2>
                    <input type="text" id="name" placeholder="Name" required />
                    <input type="text" id="number" placeholder="Number" required />
                    <button type="submit">Enquiry</button>
                </form><br/>
                <div className="social-media">
                    <Link to="/facebook"><FaFacebookSquare className="iconFooter faceBookIcon" /></Link>
                    <Link to="/instagram"><FaInstagramSquare className="iconFooter instagramIcon" /></Link>
                    <Link to="/twitter"><FaTwitterSquare className="iconFooter twitterIcon" /></Link>
                </div>
                <div className="copyright">
                    <p>Copyright © 2024 <Link className="footerLogo">Logo</Link> & All rights reserved.</p>
                    <p to="/agamtechnologyservice">Developed by: <Link to="/ATS" className="ats">Agam Tech Service</Link>.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;