import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { FaBlogger } from "react-icons/fa6";
// import { IoIosRemove, IoMdPricetags } from "react-icons/io";
// import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import { FaPhoneAlt} from "react-icons/fa";
import './navbar.css';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isNavOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);

    }

    toggleNav = () => {
        this.setState(prevState => ({
            isNavOpen: !prevState.isNavOpen
        }));
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
            this.setState({ isScrolled: true });
        } else {
            this.setState({ isScrolled: false });
        }
    }

    render() {
        const { isScrolled } = this.state;
        //const { isNavOpen } = this.state;
        //const wildLifeToursItem = ['Item 1', 'Item 2', 'Item 3'];

        return (
            <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
                <Link className="logo" to="/">wilderness tour</Link>
                <ul className='nav-ul'>
                    
                    <Link className='contact-nav'><FaPhoneAlt /><p>+91 0123456789</p></Link>
                </ul>
            </nav>
        );
    }
}

export default Navigation;