import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { signUp, signIn, signOut } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById('root');
    const store = configureStore();

    // TESTING
    window.store = store;
    window.signUp = signUp;
    window.signIn = signIn;
    window.signOut = signOut;
    //

    ReactDOM.render(<h1>HitFlix</h1>, root)
})