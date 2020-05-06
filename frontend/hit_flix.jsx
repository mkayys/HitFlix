import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import { signUp, signIn, signOut } from './actions/session_actions';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {

    const root = document.getElementById('root');

    let preloadedState;
    
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    };

    const store = configureStore(preloadedState);

    // TESTING
    window.store = store;
    window.signUp = signUp;
    window.signIn = signIn;
    window.signOut = signOut;
    //

    ReactDOM.render(<Root store={store} />, root)
})