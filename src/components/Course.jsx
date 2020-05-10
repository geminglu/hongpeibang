import React, {Component} from 'react';
import style from "../style/home/stu/home.module.scss";
import {connect} from "react-redux";
import {getcourse} from "../store/actioin/stu";
import {NavLink} from "react-router-dom";

class Course extends Component {
    render() {
        return (
            <div className={style.conent}>
                <ul>
                    <li>
                        <h2>推荐课程</h2>
                        <ul>
                            {this.props.state.stu.commend.map((item, index) => {
                                return (
                                    <NavLink to={"/lesson/" + item.courseId}>
                                        <li key={item.courseId}>
                                            <div className={style.img_span}>
                                                <img src={item.coverImage}/>
                                                <span>{item.buyNum > "1000" ? "1000+" : item.buyNum}在学</span>
                                            </div>
                                            <h3>{item.coverTitle}</h3>
                                        </li>
                                    </NavLink>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }

    componentWillMount() {
        this.props.getcourse()

    }
}

export default connect(state => ({state: state}), {getcourse})(Course)