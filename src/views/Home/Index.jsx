import React, {Component} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import My from "./My";
import Home from "./Home";
import Ask from "./Ask";
import Circle from './Circle'

class Index extends Component {
    render() {
        return (
            <div>
                首页
                <Switch>
                    <Route path={"/my"} exact component={My}></Route>
                    <Route path={"/"} exact component={Home}></Route>
                    <Route path={"/ask"} exact component={Ask}></Route>
                    <Route path={"/circle"} exact component={Circle}></Route>
                    <Redirect to={{pathname:"/error"+this.props.location.pathname}}/>
                </Switch>
            </div>
        );
    }
    componentDidMount(){

    }
}

export default Index;