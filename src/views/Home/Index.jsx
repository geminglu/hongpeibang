import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import My from "./My";
import Stu from "./Stu";
import Ask from "./Ask";
import Circle from './Circle'
import style from '../../style/home/index.module.scss'
import {connect} from 'react-redux'
import {addGoods, getGoods} from '../../store/actioin/goods'
import "lib-flexible"

class Home extends Component {
    render() {
        return (
            <div>
                <div className={style.tabbar}>
                    <ul>
                        <li>
                            <NavLink to={"/"} exact activeClassName={style.active}>
                                <i></i>
                                <span>学烘培</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/circle"}  activeClassName={style.active}>
                                <i></i>
                                <span>烘培圈</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ask"} activeClassName={style.active}>
                                <i></i>
                                <span>问答</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/my"} activeClassName={style.active}>
                                <i></i>
                                <span>小窝</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path={"/my"}  component={My}></Route>
                    <Route path={"/"} exact component={Stu}></Route>
                    <Route path={"/ask"} component={Ask}></Route>
                    <Route path={"/circle"}  component={Circle}></Route>
                    <Route path={"/ask"}  component={Ask}></Route>
                    {/*<Redirect to={{pathname: "/error" + this.props.location.pathname}}/>*/}
                </Switch>
            </div>
        );
    }

    componentDidMount() {

    }


}

export default connect(state => ({state: state}), {addGoods, getGoods})(Home)