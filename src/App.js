import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Error from './views/Error'
import Home from './views/Home/Index';
import Baike from './views/Home/Stu/Baike'
import Lesson from "./views/Home/Stu/Lesson";
import { connect } from 'react-redux'
import { getstu } from './store/actioin/stu'

function App() {
    return (
        <div className={"app"} style={{overflow: "hidden"}}>
            <Switch>
                <Route path="/error/:path" component={Error}></Route>
                <Route path={"/baike"} component={Baike}/>
                <Route path={"/lesson/:id"} component={Lesson}></Route>
                <Route path={"/"} component={Home}></Route>
            </Switch>
        </div>
    );
}

export default connect(state => ({state: state}), {getstu})(App)
