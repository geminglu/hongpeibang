import React, {Component} from 'react';
import style from '../style/topnav.module.scss'

class Topnav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let top_left,top_rigth,top_conent,button;
        console.log(this.props.children)
        this.props.children.forEach((item, index) => {
            switch (item.props.position) {
                case "top_left":
                    top_left = item.props.children
                    break;
                case "top_rigth":
                    top_rigth = item.props.children
                    break;
                case "top_conent":
                    top_conent = item.props.children
                    break;
                case "button":
                    button = item.props.children
                    break;
            }
        })
        return (
            <div className={style.warp}>
                <div className={style.top}>
                    <div className={style.top_left}>{top_left}</div>
                    <div className={style.top_conent}>{top_conent}</div>
                    <div className={style.top_right}>{top_rigth}</div>
                </div>
                {/*判断button是否为空如果是空的话就不用渲染了*/}
                {!button? null:<div className={style.button}>{button}</div>}

            </div>
        )
    }
}

export default Topnav;

