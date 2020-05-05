
import React, {Component} from 'react';

class Back extends Component {
    render() {
        return (
            <div>
                <div style={{width: "27px", height: "27px",cursor:"pointer"}} onClick={this.back.bind(this)}>
                    <img style={{width: "27px", height: "27px"}} src={require('./../images/back.png')}/>
                </div>
            </div>
        );
    }
    back(){
        window.history.go(-1)
}
}

export default Back;
