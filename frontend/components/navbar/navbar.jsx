import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
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
    }
};


export default NavBar;