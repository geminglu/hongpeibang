import React, { Component } from "react";

//引入scss样式
import style from "./../../../style/home/circle/new.module.scss";

class New extends Component {
  render() {
    return (
      <div>
        <div className={style.newup}>
          <ul>
            <li>
              <img src={require("../../../images/new1.png")} />
            </li>
            <li>
              <img src={require("../../../images/new2.jpg")} />
            </li>
            <li>
              <img src={require("../../../images/new3.png")} />
            </li>
            <li>
              <img src={require("../../../images/new4.jpg")} />
            </li>
            <li>
              <img src={require("../../../images/new5.png")} />
            </li>
            <li>
              <img src={require("../../../images/new6.png")} />
            </li>
            <li>
              <img src={require("../../../images/new7.png")} />
            </li>
          </ul>
        </div>
        <div className={style.newin}>
            <ul>
                <li>#早餐#</li>
                <li>#午餐#</li>
                <li>#晚餐#</li>
                <li>#下午茶#</li>
                <li>#夜宵#</li>
                <li>#ACA交作业#</li>
                <li>#外貌协会#</li>
                <li>#十多个地#</li>
                <li>#撒的发生#</li>
                <li>#好吃的早餐#</li>
                
            </ul>
        </div>
      </div>
    );
  }
}

export default New;
