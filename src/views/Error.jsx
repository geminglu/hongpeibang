import React, {Component} from 'react'
import error from '../style/error.module.css'
import {Button} from 'react-bootstrap';

export default class Error extends Component {
    render() {
        return (
            <div className={error.index}>
                <img className={error.imdex_img} src={require('../images/404.png')} alt=""/>
                <Button onClick={this.skip.bind(this)} style={{width: "150px",margin: "10px 20px"}} size="lg" variant="primary">返回首页</Button>
                <Button onClick={this.go.bind(this)} style={{width: "150px",margin: "10px 20px"}} size="lg" variant="success">返回上一页</Button>
            </div>
        )
    };
    skip(){
        this.props.history.push("/")
    }
    go(){
        this.props.history.go(-1)
    }
}
