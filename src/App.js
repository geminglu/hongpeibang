import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Error from './views/Error'
import Index from './views/Home/Index';
import { connect } from 'react-redux'
import { addGoods } from './store/actioin/goods'

function App() {
    return (
        <div className={"app"}>
            <Switch>
                <Route path="/error/:path" component={Error}></Route>
                <Route path={"/"} component={Index}></Route>
            </Switch>
        </div>
    );
}

export default connect(state => ({state: state}), {addGoods})(App)
