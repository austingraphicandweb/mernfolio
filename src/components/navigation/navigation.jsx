import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

const navigation = () => {

    return (
        <div className="navigation">
        <ul>
            <li><Link to='/' target='_blank' className='logo'><img src=""/><span>Austin Keener</span></Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='' target='_blank'>Design</Link></li>
            <li><Link to='' target='_blank'>Resume</Link></li>
        </ul>
        </div>
    )

}

export default navigation;