import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Splash from './main_page/splash';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;