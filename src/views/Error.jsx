import React, {Component} from 'react'
import error from '../style/error.module.scss'

export default class Error extends Component {
    render() {
        return (
            <div className={error.index}>
                <img className={error.imdex_img} src={require('../images/404.png')} alt=""/>
                <div className={error.button}>
                    <div className={error.button_home} onClick={this.skip.bind(this)}
                         style={{width: "150px", margin: "10px 20px"}}>返回首页
                    </div>
                    <div className={error.button_go} onClick={this.go.bind(this)}
                         style={{width: "150px", margin: "10px 20px"}}>返回上一页
                    </div>
                </div>
            </div>
        )
    };

    skip() {
        this.props.history.push("/")
    }

    go() {
        this.props.history.go(-1)
    }
}
