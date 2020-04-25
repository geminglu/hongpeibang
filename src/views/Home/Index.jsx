import React, {Component} from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import My from "./My";
import Home from "./Home";
import Ask from "./Ask";
import Circle from './Circle'
import index from '../../style/home/index.module.scss'
import {connect} from 'react-redux'
import {addGoods, getGoods} from '../../store/actioin/goods'
import axios from 'axios'

class Index extends Component {
    render() {
        return (
            <div>
                <div className={index.tabbar}>
                    <ul>
                        <li>
                            <NavLink to={"/"} exact activeClassName={index.active}>
                                <i></i>
                                <span>学烘培</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/circle"} activeClassName={index.active}>
                                <i></i>
                                <span>烘培圈</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ask"} activeClassName={index.active}>
                                <i></i>
                                <span>问答</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/my"} activeClassName={index.active}>
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
                {this.props.state.goods.goodsLIst.map(item => <div key={item.goodsID}>
                    {item.name + "==>>" + item.price}
                </div>)}
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props.state)
        this.props.addGoods("草莓", 12)
        this.props.addGoods("荔枝", 132)
        this.props.addGoods("芒果", 32)
        this.props.getGoods()
        this.get()
    }

    async get() {
        const {data} = await axios("/api/qqq")
        this.props.addGoods(data.name, data.price)
    }
}

export default connect(state => ({state: state}), {addGoods, getGoods})(Index)