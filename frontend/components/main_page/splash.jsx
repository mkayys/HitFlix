import React from 'react';

// const Splash = () => (
//     <div className="splash-container">
//         {/* <video autoPlay muted loop id="myVideo">
//             <source src={window.splash} type="video/mp4" />
//         </video> */}
//         {/* <img src={window.home} /> */}
//         <div>Welcome to HitFlix</div>
//         <div>Sign Up here</div>
        
//     </div>
// );

// export default Splash;

import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: ''
        }
        this.updateEmail = this.updateEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateEmail(e) {
        e.preventDefault();
        localStorage.setItem('email', e.currentTarget.value);
        this.setState({ email: e.currentTarget.value });
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.email !== "") {
            this.props.history.push('/signup');
        } else {
            this.setState({ errors: 'Email is required!'})
        }
    }

    render() {
        return (
            <div className="splash-container">
                <img className="splash-background" src={window.home} alt=""/>
                <div className='overlay-card'>
                    
                    <div className="get-started">
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h2>Ready to watch? Enter your email to begin your adventure.</h2>
                        {/* <label htmlFor="email">Email Address:</label> */}
                            <input type="email" 
                                id="email" 
                                placeholder="Email Address"
                                onChange={this.updateEmail} />
                        {/* <Link to={{ pathname: '/signup', email: this.state.email }}>Sign Up</Link> */}
                    {/* <Link to='/signup'>Get Started</Link> */}
                    <button onClick={this.handleClick}>Get Started</button>
                    <div className="error-message">{this.state.errors}</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Splash;