import React, { Component } from "react";
import New from "./new";
import Expert from "./expert";
import { Switch, Route, Redirect, NavLink } from "react-router-dom"; //使用路由组建要引入
import Topnav from "../../../components/Topnav";
import Attention from "./attention";

class Circle extends Component {
  render() {
    return (
      <div>
        <Topnav>
          <div position="top_left">左</div>
          <div position="top_rigth">右</div>
          <div position="top_conent">中</div>
        </Topnav>
        <Route path={"/circle"} component={New}></Route>
      </div>
    );
  }
}

export default Circle;
