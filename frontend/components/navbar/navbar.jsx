import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, signOut }) => {
    const sessionLinks = () => (
        <div className="navbar">
            <div className="logo">
                HitFlix
            </div>
            <div className="user-interface">
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )

    const welcome = () => (
        <div className="navbar">
            <div className="logo">
                HitFlix
            </div>
            <div className="user-interface">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
    
    return currentUser ? welcome() : sessionLinks()
};


export default NavBar;