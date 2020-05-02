import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Error from './views/Error'
import Home from './views/Home/Index';
import { connect } from 'react-redux'
import { addGoods } from './store/actioin/goods'

function App() {
    return (
        <div className={"app"} style={{overflow: "hidden"}}>
            <Switch>
                <Route path="/error/:path" component={Error}></Route>
                <Route path={"/"} component={Home}></Route>
            </Switch>
        </div>
    );
}

export default connect(state => ({state: state}), {addGoods})(App)
