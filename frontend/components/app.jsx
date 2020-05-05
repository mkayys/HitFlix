import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './main_page/splash';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
    <div className="entire-web-page">
        <div className="navbar-container">
            <NavBarContainer />
        </div>
        <Switch>
            <Route path="/login" component={NavBarContainer} />
            <Route path="/signup" component={NavBarContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;