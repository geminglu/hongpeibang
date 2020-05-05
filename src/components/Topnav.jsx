import React, {Component} from 'react';
import style from '../style/topnav.module.scss'

class Topnav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let top_left,top_right,top_center,button;
        this.props.children.forEach((item, index) => {
            switch (item.props.position) {
                case "top_left":
                    top_left = item.props.children
                    break;
                case "top_right":
                    top_right = item.props.children
                    break;
                case "top_center":
                    top_center = item.props.children
                    break;
                case "bottom":
                    button = item.props.children
                    break;
            }
        })
        return (
            <div className={style.warp}>
                <div className={style.top}>
                    <div className={style.top_left}>{top_left}</div>
                    <div className={style.top_center}>{top_right}</div>
                    <div className={style.top_right}>{top_right}</div>
                </div>
                <div className={style.button}>{button}</div>
            </div>
        )
    }
}

export default Topnav;

