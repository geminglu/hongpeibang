import React, {Component} from 'react';
import style from '../../../style/home/stu/home.module.scss'
import Topnav from '../../../components/Topnav'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import {getstu, getcommend, getcourse} from '../../../store/actioin/stu'

class Stu extends Component {
    render() {
        return (
            <div>
                <Topnav>
                    <div position="top_left">左</div>
                    <div position="top_rigth">右</div>
                    <div position="top_conent">中</div>
                </Topnav>
                <div className={style.nav}>
                    <ul>
                        {this.props.state.stu.nav.map((item, index) => {
                            let legth = item.link.split("/");
                            let path = legth[legth.length-1];
                            return (
                                <NavLink to={"/"+path} key={item.categoryItemId}>
                                    <li>
                                        <img src={item.image}/>
                                        <span>{item.title}</span>
                                    </li>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
                <div className={style.conent}>
                    <ul>
                        <li>
                            <h2>推荐课程</h2>
                            <ul>
                                {this.props.state.stu.commend.map((item, index) => {
                                    return (
                                        <li key={item.courseId}>
                                            <div className={style.img_span}>
                                                <img src={item.coverImage}/>
                                                <span>{item.buyNum > "1000" ? "1000+" : item.buyNum}在学</span>
                                            </div>
                                            <h3>{item.coverTitle}</h3>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                        {this.props.state.stu.cetcommend.map((item, index) => {
                            return (
                                <li key={item.categoryId}>
                                    <h2>{item.title}</h2>
                                    <ul>
                                        {item.item.map((item, index) => {
                                            return (
                                                <li key={item.categoryItemId} title={item.shareDescription}>
                                                    <div className={style.img_span}>
                                                        <img src={item.image}/>
                                                        <span>{item.buyNum > "1000" ? "1000+" : item.buyNum}在学</span>
                                                    </div>
                                                    <h3>{item.shareTitle}</h3>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.getstu()
        this.props.getcommend()
        this.props.getcourse()

    }
}

export default connect(state => ({state: state}), {getstu, getcommend, getcourse})(Stu)