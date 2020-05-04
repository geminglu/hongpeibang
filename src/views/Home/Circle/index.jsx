import React, { Component } from "react";
//引入组件
import New from "./new";
import Expert from "./expert";
import Attention from "./attention";

import { Switch, Route, Redirect, NavLink } from "react-router-dom"; //使用路由组建要引入
//引入头部公共组件
import Topnav from "../../../components/Topnav";

//引入scss样式
import style from "./../../../style/home/circle/index.module.scss";

class Circle extends Component {
  render() {
    return (
      <div>
        <Topnav>
          <div position="top_left">左</div>
          <div position="top_rigth">右</div>
          <div position="top_conent">
            <NavLink
              to={"/circle/attention"}
              exact
              activeClassName={style.active}
            >
              关注
            </NavLink>
            <NavLink to={"/circle"} exact activeClassName={style.active}>
              最新
            </NavLink>
            <NavLink to={"/circle/expert"}  activeClassName={style.active}>
              达人
            </NavLink>
          </div>
        </Topnav>
        <Route path={"/circle/"} exact component={New}></Route>
        <Route path={"/circle/expert"}  component={Expert}></Route>
        <Route path={"/circle/attention"} exact component={Attention}></Route>
      </div>
    );
  }
}

export default Circle;
