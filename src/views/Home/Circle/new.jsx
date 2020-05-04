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
        <div className={style.newmain}>
          <ul>
            <li>
              <div className={style.newmain1}>
                <div className={style.newmain1l}>
                  <img src={require("../../../images/touxiang.png")} />
                </div>
                <div className={style.newmain1r}>
                  <p>名字</p>
                  <p>倒计时</p>
                </div>
              </div>
              <div className={style.newmainc}>
                输入水电费哈萨克缉毒风暴哈萨克打过比赛打输入法蒜蓉粉丝如果是的了卡机
              </div>
              <div className={style.newmainm}>
                <img src={require("../../../images/one.jpg")} />
              </div>
              <div className={style.newmainf}>
                <span>赞</span>

                <span>打赏</span>

                <span>评论</span>
              </div>
            </li>
            <li>
              <div className={style.newmain1}>
                <div className={style.newmain1l}>
                  <img src={require("../../../images/touxiang.png")} />
                </div>
                <div className={style.newmain1r}>
                  <p>名字</p>
                  <p>倒计时</p>
                </div>
              </div>
              <div className={style.newmainc}>
                输入水电费哈萨克缉毒风暴哈萨克打过比赛打输入法蒜蓉粉丝如果是的了卡机
              </div>
              <div className={style.newmainm}>
                <img src={require("../../../images/one.jpg")} />
              </div>
              <div className={style.newmainf}>
                <span>赞</span>

                <span>打赏</span>

                <span>评论</span>
              </div>
            </li>
            <li>
              <div className={style.newmain1}>
                <div className={style.newmain1l}>
                  <img src={require("../../../images/touxiang.png")} />
                </div>
                <div className={style.newmain1r}>
                  <p>名字</p>
                  <p>倒计时</p>
                </div>
              </div>
              <div className={style.newmainc}>
                输入水电费哈萨克缉毒风暴哈萨克打过比赛打输入法蒜蓉粉丝如果是的了卡机
              </div>
              <div className={style.newmainm}>
                <img src={require("../../../images/one.jpg")} />
              </div>
              <div className={style.newmainf}>
                <span>赞</span>

                <span>打赏</span>

                <span>评论</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default New;
