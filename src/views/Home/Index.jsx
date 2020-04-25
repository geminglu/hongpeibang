import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import My from "./My";
import Home from "./Home";
import Ask from "./Ask";
import Circle from './Circle'
import index from '../../style/home/index.module.scss'

class Index extends Component {
    render() {
        return (
            <div>
                <div className={index.tabbar}>
                    <ul>
                        <li>
                            <NavLink to={"/"} exact activeClassName={index.active} >
                                <i></i>
                                <span>学烘培</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/circle"} activeClassName={index.active} >
                            <i></i>
                            <span>烘培圈</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ask"} activeClassName={index.active} >
                            <i></i>
                            <span>问答</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/my"} activeClassName={index.active} >
                            <i></i>
                            <span>小窝</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path={"/my"} exact component={My}></Route>
                    <Route path={"/"} exact component={Home}></Route>
                    <Route path={"/ask"} exact component={Ask}></Route>
                    <Route path={"/circle"} exact component={Circle}></Route>
                    <Redirect to={{pathname: "/error" + this.props.location.pathname}}/>
                </Switch>
            </div>
        );
    }

    componentDidMount() {

    }
}

export default Index;