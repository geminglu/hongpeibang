import React, {Component} from 'react';

//引入scss样式
import style from "./../../../style/home/my/my.module.scss";

class My extends Component {
    render() {
        return (
            <div>
                <div className={style.myup}>
                    头部
                </div>
                <div className={style.mycenter}>
                    <div className={style.mycenterLeft}>
                    </div>

                    <div className={style.mycenterRight}>
                        <p>厌倦</p>
                        <div className={style.center}>ID:1234567890
                            <span>></span>
                        </div>
                        <div className={style.bottom}>经验值：20/100</div>
                    </div>
                </div>

                <div className={style.mycenterBottom}>
                    <div className={style.one}>
                        <span>0</span>
                        <p>关注</p>
                    </div>
                    <div className={style.two}>
                        <span>0</span>
                        <p>粉丝</p>
                    </div>
                    <div>
                        <span>20</span>
                        <p>帮贡</p>
                    </div>
                </div>
                <div className={style.mycollect}>
                    <div>
                        <img src={require("../../../images/my1.png")} />
                        <p>作品</p>
                    </div>
                    <div>
                        <img src={require("../../../images/my2.png")} />
                        <p>食谱</p>
                    </div>
                    <div>
                        <img src={require("../../../images/my3.png")} />
                        <p>收藏</p>
                    </div>
                    <div>
                        <img src={require("../../../images/my4.png")} />
                        <p>问题</p>
                    </div>
                </div>

                <div className={style.myblank}>
                </div>

                <div className={style.myday}>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>勋章库</p>
                        <a href="">></a>
                    </li>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>精彩活动</p>
                        <a href="">></a>
                    </li>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>每日课程</p>
                        <a href="">></a>
                    </li>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>我的签到</p>
                        <a href="">></a>
                    </li>
                </div>
                <div className={style.myblanktwo}>
                </div>  

                <div className={style.mylook}>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>浏览记录</p>
                        <a href="">></a>
                    </li>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>达人申请</p>
                        <a href="">></a>
                    </li>
                    <li>
                        <img src={require("../../../images/my5.png")} /> 
                        <p>帮贡记录</p>
                        <a href="">></a>
                    </li>
                </div>             
            </div>
        );
    }
}

export default My;