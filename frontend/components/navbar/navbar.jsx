import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props) {
        super(props);

        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(e) {
        e.preventDefault();
        this.props.signOut()
            .then(() => this.props.history.push('/'))
    }

    render() {
        const { currentUser } = this.props;
        const sessionLinks = () => (
            <div>
                <Link to="/login">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
  

        const welcome = () => (
            <div className="drpdwn">
                USER ICON HERE
                <div className="drpdwn-content">
                    <button onClick={this.handleLogOut}>Sign Out</button>
                </div>
            </div>
        )

        return (
            <div className="navbar">
                <div className="logo">
                    <Link to="/">HitFlix</Link>
                </div>
                <div className="user-interface">
                    {currentUser ? welcome() : sessionLinks()}
                </div>
            </div>
        )
    }
};

export default withRouter(NavBar);