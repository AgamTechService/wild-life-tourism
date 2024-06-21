import React, { Component } from "react";
import { Link } from "react-router-dom";
import tiger from '../../../image/NationSafari/TigerSafari.jpeg';
import elephant from '../../../image/elephantImage.jpeg';
import lion from '../../../image/lion.jpg';
import zebra from '../../../image/wildtour/tigerwild6.jpg';
import leo from '../../../image/NationSafari/leoSafari.jpeg';
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import './nationalTour.css';



class NationalTour extends Component {
    render() {
        return (
            <>
                <div className="tour">
                    <h1 className="exploreClass">TIGER RESERVES IN INDIA</h1>

                    {/* Row One Section */}

                    <div className="rowOne">
                        <div className="TourPackage tiger">
                            <div className="TourdivImage">
                                <img src={tiger} alt="" className="tourImage tiger" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <div className="tourHOne">BANDIPUR TIGER RESERVE PARK</div>
                               
                                <Link className="exploreLinkTour" to="/explore1">Explore</Link>
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
                                <h1 className="tourHOne">JIM CORBETT TIGER RESERVE PARK</h1>
                               
                                <Link className="exploreLinkTour" to="/explore2">Explore</Link>
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
                                <h1 className="tourHOne">NAGARHOLE TIGER RESERVE PARK</h1>
                                
                                <Link className="exploreLinkTour" to="/explore3">Explore</Link>
                            </div>
                        </div>
                    </div>

                    {/* Row Two Section */}

                    <div className="rowOne">
                        <div className="TourPackage tiger">
                            <div className="TourdivImage ">
                                <img src={zebra} alt="" className="tourImage tiger" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                   
                                   
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <div className="tourHOne">MUDUMALAI TIGER RESERVE PARK</div>
                                
                                <Link className="exploreLinkTour" to="/explore4">Explore</Link>
                            </div>
                        </div>
                        <div className="TourPackage tiger">
                            <div className="TourdivImage">
                                <img src={leo} alt="" className="tourImage tiger" />
                            </div>
                            <div className="imageContent overlay">
                                <div className="ratingTour">
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaStar className="rateTourIcon" />
                                    <FaRegStarHalfStroke className="rateTourIcon" />
                                </div>
                                <h1 className="tourHOne">BHADRA TIGER RESERVE PARK</h1>
                    
                                <Link className="exploreLinkTour" to="/explore5">Explore</Link>
                            </div>
                        </div>
                        </div>
                </div>
            </>
        );
    }
}

export default NationalTour;