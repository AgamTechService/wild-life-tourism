import React, { Component } from "react";
import { Link } from "react-router-dom";
import tiger from '../../../image/wildtour/tigerwild.jpg';
import elephant from '../../../image/wildtour/tigerwild2.jpg';
import leo from '../../../image/wildtour/tigerwild4.jpg';
import cc from '../../../image/wildtour/tigerwild6.jpg';

import lion from '../../../image/wildtour/tigerwild8.jpg';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import './nationalTour.css';



class ToNationalPark extends Component {
    render() {
        return (
            <>
                <div className="tour">

                    {/* Row One Section */}

                    <div className="rowOne">
                        <div className="TourPackage tiger">
                            <div className="TourdivImage">
                                <img src={tiger} alt="" className="tourImage" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <div className="tourHOne">BANDIPUR TIGER SAFARI</div>
                           
                                <Link className="exploreLinkTour" to="/wildexplore1" >Explore</Link>
                            </div>
                        </div>
                        <div className="TourPackage elephant">
                            <div className="TourdivImage">
                                <img src={elephant} alt="" className="tourImage" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <h1 className="tourHOne">JIM CORBETT TIGER Safari</h1>
                              
                                <Link className="exploreLinkTour" to="/wildexplore2">Explore</Link>
                            </div>
                        </div>
                        <div className="TourPackage lion">
                            <div className="TourdivImage">
                                <img src={lion} alt="" className="tourImage" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                </div>
                                <h1 className="tourHOne">NAGARHOLE    TIGER    Safari</h1>
                              
                                <Link className="exploreLinkTour" to="/wildexplore3">Explore</Link>
                            </div>
                        </div>
                    </div>

                    {/* Row Two Section */}

                    <div className="rowOne">
                        <div className="TourPackage tiger">
                            <div className="TourdivImage">
                                <img src={leo} alt="" className="tourImage" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <div className="tourHOne">MUDUMALAI TIGER Safari</div>
                              
                                <Link className="exploreLinkTour" to="/wildexplore4">Explore</Link>
                            </div>
                        </div>
                        <div className="TourPackage elephant">
                            <div className="TourdivImage">
                                <img src={cc} alt="" className="tourImage" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <h1 className="tourHOne">BHADRA TIGER Safari</h1>
                               
                                <Link className="exploreLinkTour" to="/wildexplore5">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ToNationalPark;