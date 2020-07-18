import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="header">
            <div className="header-title">
                Todo App
            </div>
            <ul className="header-list">
                <li><Link className="header-item" href="/">Home</Link></li>
                <li><Link className="header-item" href="/task">Tasks</Link></li>
                <li><Link className="header-item" href="/about">About</Link></li>
                <li><Link className="header-item" href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Header