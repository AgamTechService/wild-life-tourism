import React, { Component } from "react";
import Arrow from '../../image//Arrow.jpeg';
import './arrow.css';

class TopArrow extends Component {
    scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    render() {
        return (
            <>
                <button onClick={this.scrollToTop} style={buttonStyle} className="ArrowButton">
                    <img src={Arrow} alt="" className="ArrowTop" />
                </button>
            </>
        );
    }
}
const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
};

export default TopArrow;