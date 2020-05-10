import React, {Component} from 'react';
import style from '.././../../style/home/stu/lesson.module.scss'
import {getlesson} from '../../../store/actioin/stu'
import {connect} from "react-redux";

class Lesson extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <video className={style.video} controls="controls" src={this.props.state.stu.lesson.playURL}
                       poster={this.props.state.stu.lesson.image} autoPlay></video>
                <div className={style.top}>
                    <div className={style.title}>{this.props.state.stu.lesson.title}</div>
                    <div className={style.inpen}>
                        <div>
                            <img src={require('../../../images/pen.png')}/>
                            <span
                                className={style.sss}>{this.props.state.stu.lesson.buyNum > 1000 ? "1000+" : this.props.state.stu.lesson.buyNum}</span>
                            人在学
                        </div>
                        <span className={style.span}>试看课程</span>
                    </div>
                </div>
                <div className={style.conetn}>
                    <ul>
                        {this.props.state.stu.introduces.map(item => (
                            <li key={item.educationCourseSummaryExtendId}>
                                <div>
                                    <h5 className={style.ctitle}>{item.title}</h5>
                                    <div dangerouslySetInnerHTML={{__html: item.introduce}}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.getlesson(this.props.match.params.id)
    }
}

export default connect(state => ({state: state}), {getlesson})(Lesson)