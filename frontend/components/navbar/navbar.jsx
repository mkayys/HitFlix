import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);

        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        debugger;
        this.props.signOut()
            .then(() => this.props.history.push('/'))
    }

    render() {
        const { currentUser } = this.props;
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
                    <button onClick={this.handleLogOut}>Sign Out</button>
                </div>
            </div>
        )

        return currentUser ? welcome() : sessionLinks()
    }
};

export default withRouter(NavBar);