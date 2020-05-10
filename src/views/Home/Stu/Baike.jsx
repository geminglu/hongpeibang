import React, {Component} from 'react';
import style from '../../../style/home/stu/baike.module.scss'
import Topnav from "../../../components/Topnav";
import Back from '../../../components/Back'
import {connect} from "react-redux";
import {getbaike} from "../../../store/actioin/stu";

class Baike extends Component {
    render() {
        return (
            <div>
                <Topnav>
                    <div position="top_left"><Back/></div>
                    <div position="top_right"></div>
                </Topnav>
                <div className={style.bottom}>
                    <a href="https://ce7ce9c885b5c04b6771ea454e096946.dd.cdntips.com/imtt.dd.qq.com/16891/apk/350811AD03B1527E4C0738AE50817A18.apk?mkey=5eae4b80b7c37098&f=8eb5&fsname=com.hongbeibang.app_5.2.2_5002020.apk&csr=1bbd&cip=183.195.86.109&proto=https">
                        <img className={style.img} src={require('../../../images/dwed.png')}/>
                    </a>
                </div>
                <ul className={style.ul}>
                    {this.props.state.stu.baike.map((item, index) => {
                        return (
                            <li key={item.courseId}>
                                <img className={style.mig1}
                                     src={item.image}/>
                                <span style={{font: "16px/2em ''"}}>{item.title}</span>
                            </li>)
                    })}
                </ul>

                <div style={{height: "130px"}}></div>
            </div>
        );
    }

    componentWillMount() {
        this.props.getbaike()

    }
}

export default connect(state => ({state: state}), {getbaike})(Baike)