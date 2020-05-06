import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import Splash from './main_page/splash';
import NavBarContainer from './navbar/navbar_container';
import SignUpContainer from './session_form/signup_container';
import LogInContainer from './session_form/login_container';
import MainPageContainer from './main_page/main_page_container';

const App = () => (
    <div className="entire-web-page">
        <div className="navbar-container">
            <NavBarContainer />
        </div>
        <Switch>
            <AuthRoute path="/login" component={LogInContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            {/* <Route path="/test" render={() => (<h1>YOU MADE IT</h1>)} /> */}
            <ProtectedRoute path="/browse" component={MainPageContainer} />
            <AuthRoute exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;