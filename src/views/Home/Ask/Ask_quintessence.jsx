import React, {Component} from 'react';
import style from '../../../style/home/ask/ask.module.scss'
import {connect} from "react-redux";
import {getEssence} from "../../../store/actioin/ask";

class AskQuintessence extends Component {
    render() {
        return (
            <div className={style.main}>
                {this.props.state.ask.essence.map((item, index) => {
                    return (
                        <div className={style.article2} key={index}>
                            <div className={style.author_pic}>
                                <div className={style.author_img}>
                                    <img
                                        src={item.clientImage}
                                        alt=""/>
                                </div>
                            </div>
                            <div className={style.author}>
                                {item.isMaster = 1 ? (
                                    <div className={style.expert}>
                                        <img src={require('../../../images/isMaster.png')} alt=""/>
                                    </div>) : ''}

                                <div className={style.author_name}>{item.clientName}</div>
                            </div>
                            <a href={`/answer/${item.contentId}`}>
                                <div className={style.problem}>{item.coverTitle}</div>
                                <div className={style.answer}>{item.coverSummary}</div>
                            </a>
                            <div className={style.commend}>
                                {`${item.hotNum}个赞`}
                            </div>
                        </div>
                    )
                })}

            </div>
        );
    }

    componentWillMount() {
        this.props.getEssence()
    }
}

export default connect(state => ({state: state}), {getEssence})(AskQuintessence)