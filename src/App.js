import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Error from './views/Error'
import Index from './views/Home/Index';
import './style/app.css'

function App() {
    return (
        <div>
            <Switch>
                <Route path="/error/:path" component={Error}></Route>
                <Route path={"/"} component={Index}></Route>
            </Switch>
        </div>
    );
}

export default App;
