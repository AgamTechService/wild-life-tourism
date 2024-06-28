import React, { Component } from "react";
import leafAbout from '../../image/leafabout.png';
import tiger from '../../image/tigerThree.png';
import lion from '../../image/lion.jpg';
import bear from '../../image/Sloth_Bear-removebg-preview.png';
import profile from '../../image/profileClient.jpe;
import './Home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    is.state;
        return (
            <main className="main">
                <section className="main-section-one">
                    <div className="tigerSlider">
                        <img src={tiger} alt="" className="tigerImage" />
                        <div className="tiger-content">
                            <span className="ti">Ti</span>
                            <span className="ger">Ger</span>
                        </div>
                       
                    </div>

                    <div className="elephantSlider">
                        <img src={tiger} alt="" className="elephantImage" />
                        <div className="elephantLetter">
                            <span className="ele">wild</span>
                            <span className="phant">life</span>
                        </div>

                    </div>

                    <div className="lionSlider">
                        <img src={lion} alt="" className="lionImage" />
                        <div className="lionLetter">
                            <span>Li</span>
                            <span>On</span>
                        </div>
                        <Link to="/" className="tourButton">Tour</Link>
                    </div>

                    <div className="BearSlider">
                        <img src={bear} alt="" />
                        <div className="bearLetter">
                            <span>Be</span>
                            <span>Ar</span>
                        </div>
                        <Link to="/" className="tourButton">Tour</Link>
                    </div>
                </section>

                <section className="main-section-two">
                    <img src={cloud} alt="" className="cloud" />
                    <div className="cave">
                        <div className="content-txt">
                            <h2 className="A">A</h2><span className="bout">bout</span><span className="us">US</span>
                            <div className="content-value">
                                <li>
                                    <b>Guided Wildlife Tours:</b>
                                    <div className="textContentWild">Join our expert guides on immersive tours through some of the world's most stunning natural habitats. From the savannas of Africa to the rainforests of South America, we take you to where the wild things are.</div>
                                </li>
                                <li>
                                    <b>Photography Expeditions:</b>
                                    <div className="textContentWild">Capture the perfect shot with our specialized photography tours. Our guides, who are also seasoned photographers, will help you get the best angles and lighting for your wildlife shots.</div>
                                </li>
                                <li>
                                    <b>Custom Safaris:</b>
                                    <div className="textContentWild">Want a personalized experience? We offer custom safari packages tailored to your interests, schedule, and budget. From luxury lodges to rugged camping adventures, we create the safari of your dreams.</div>
                                </li>
                                <li>
                                    <b>Bird Watching Trips:</b>
                                    <div className="textContentWild">Explore prime bird watching locations with our knowledgeable ornithologists. Whether you're a beginner or a seasoned birder, our tours are designed to offer sightings of rare and exotic bird species.</div>
                                </li>
                            </div>
                            
                        </div>
                    </div>
                    <img src={leafAbout} alt="" className="aboutLeaf" />
                    <div className="bottomImage">
                        <div className={`nav-main ${isScrolled ? 'mainNavScroller' : ''}`}>
                            <ul>
                                <Link className="mainNavLink" to="/tonationalpark"><GiIndiaGate className="navIconMain" /><div className="main-navTxt">Indian WildLife Tour</div></Link>
                                <Link className="mainNavLink" to="/nationtour"><TbWorld className="navIconMain" /><div className="main-navTxt">National Park in India</div></Link>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="main-section-three">
                    <div className="TreesImage">
                        <NationalTour />
                    </div>
                </section>
                <br /><br /><br />
                <section className="main-section-four client-say">
                    <h1 className="client-header">What's Clients Say</h1>
                    <h4 className="client-sub-header">This is why we do what we do</h4>
                    <div className="clientSay">
                        <img src={profile} alt="" />
                        <div className="clientSayHeader">
                            <h2>Thor</h2>
                            <h4>State, Country.</h4>
                        </div>
                        <div className="clientSayText">
                            " Overall, WildLife Tourism Company provided an unforgettable adventure, and I can’t wait to book my next trip with them. Highly recommended for anyone who loves nature and wants to experience it responsibly and authentically! "
                        </div>
                        <div className="clientRating">
                            fStroke className="ratingIcon" />
                        </div>
                        <div className="arrowSlider">
                            <Link className="arrowIconStyle"><FaRegArrowAltCircleLeft className="arrowIcon" /></Link>
                            <Link className="arrowIconStyle"><FaRegArrowAltCircleRight className="arrowIcon" /></Link>
                        </div>
                    </div>
                </section>
                
}

export default Home;
