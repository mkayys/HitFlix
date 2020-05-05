import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './main_page/splash';
import NavBarContainer from './navbar/navbar_container';
import SignUpContainer from './session_form/signup_container';
import LogInContainer from './session_form/login_container';

const App = () => (
    <div className="entire-web-page">
        <div className="navbar-container">
            <NavBarContainer />
        </div>
        <Switch>
            <Route path="/login" component={LogInContainer} />
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/test" render={() => (<h1>YOU MADE IT</h1>)} />
            {/* <Route path="/browse" component={MainPageContainer} /> */}
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;