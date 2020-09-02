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
            email: ''
        }
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateEmail(e) {
        e.preventDefault();
        localStorage.setItem('email', e.currentTarget.value);
        this.setState({ email: e.currentTarget.value });
    }

    render() {
        return (
            <div className="splash-container">
                <label htmlFor="email">Email Address:</label>
                    <input type="email" 
                        id="email" 
                        onChange={this.updateEmail} />
                {/* <Link to={{ pathname: '/signup', email: this.state.email }}>Sign Up</Link> */}
                <Link to='/signup'>Sign Up</Link>
            </div>
        )
    }
};

export default Splash;