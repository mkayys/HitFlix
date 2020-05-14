import React from 'react';

const Splash = () => (
    <div>
        <video autoPlay muted loop id="myVideo">
            <source src={window.movies} type="video/mp4" />
        </video>
        <h1>Welcome to HitFlix</h1>
        <h3>Sign Up here</h3>
    </div>
);

export default Splash;