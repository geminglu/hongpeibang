import React, {Component} from 'react';
import style from '../../../style/home/ask.module.scss'
import ask from "../../../style/home/ask.module.scss";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import AskQuintessence from "./Ask_quintessence";
import Ask_new from "./Ask_new";
import AskHot from "./Ask_hot";
class Ask extends Component {
    render() {
        return (
            <div>
                <div className={style.top}>
                    头部
                </div>
                <div className={style.nav}>
                    <NavLink className={style.nav1} activeClassName={style.active} to={'/ask/essence'}>
                        <span>精华问答</span>
                        <div className={style.line}>
                        </div>
                    </NavLink>
                    <NavLink className={style.nav1} activeClassName={style.active} exact to={'/ask'}>
                        <span>最新问题</span>
                        <div className={ask.line}>
                        </div>
                    </NavLink>
                    <NavLink className={style.nav1} activeClassName={style.active} to={'/ask/hot'}>
                        <span>最热问题</span>
                        <div className={ask.line}>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path={'/ask/essence'} exact component={AskQuintessence}>
                        </Route>
                        <Route path={'/ask'} exact component={Ask_new}>
                        </Route>
                        <Route path={'/ask/hot'} exact component={AskHot}>
                        </Route>
                        <Redirect to={{pathname: "/error" + this.props.location.pathname}}/>
                    </Switch>
                    <div>
                        <div className={style.loading}>
                            <img src={require('../../../images/loading.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ask;