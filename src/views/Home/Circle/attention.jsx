import React, {Component} from 'react';
//引入scss样式
import style from "./../../../style/home/circle/attention.module.scss";

class Attention extends Component {
    render() {
        return (
            <div className={style.attention}>
                关注
            </div>
        );
    }
}

export default Attention;