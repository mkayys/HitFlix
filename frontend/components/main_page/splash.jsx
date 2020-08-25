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

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    updateEmail(e) {
        e.preventDefault();
        this.setState({ email: e.currentTarget.value });
    }

    render() {

        return (
            <div>
                <form onSubmit={}>
                    <label>
                        <input type="email" 
                            onChange={this.updateEmail} />
                        <input type="submit" value="Sign Up" />
                    </label>
                </form>
            </div>
        )
    }
};

export default Splash;