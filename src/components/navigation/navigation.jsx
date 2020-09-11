import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

const navigation = () => {

    return (
        <div className="navigation">
            <h1 className="logo">Austin Keener</h1>
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