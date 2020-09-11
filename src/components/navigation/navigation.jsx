import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const navigation = () => {

    return (
        <div className="navigation">
            <div className="branding">
                <img src={logo} alt="Logo" width="30px" height="30px" className="logo" />
                <h1 className="brand">Austin Keener</h1>
            </div>

            <ul className="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='' target='_blank'>Design</Link></li>
                <li><Link to='' target='_blank' className="nodisplay">Resume</Link></li>
            </ul>
        </div>
    )

}

export default navigation;