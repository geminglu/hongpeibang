import React, {Component} from 'react';
import style from '../style/topnav.module.scss'

class Topnav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let top_left,top_right,top_center,bottom;
        this.props.children.forEach((item, index) => {
            // console.log(item.props.children)
            // console.log(item.props)
            switch (item.props.position) {
                case "top_left":
                    top_left = item.props.children
                    // console.log(item.props.children)
                    break;
                case "top_right":
                    top_right = item.props.children
                    // console.log(item.props.children)
                    break;
                case "top_center":
                    top_center = item.props.children
                    break;
                case "bottom":
                    bottom = item.props.children
                    break;
            }
        })
        // console.log(top_left,top_right,top_center,button)
        return (
            <div className={style.warp}>
                <div className={style.top}>
                    <div className={style.top_left}>{top_left}</div>
                    <div className={style.top_center}>{top_center}</div>
                    <div className={style.top_right}>{top_right}</div>
                </div>
                <div className={style.button}>{bottom}</div>
            </div>
        )
    }
}

export default Topnav;

