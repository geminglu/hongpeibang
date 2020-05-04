import React, {Component} from 'react';
import ask from '../../../style/home/ask/ask.module.scss'
import {getNews} from "../../../store/actioin/ask";
import {connect} from "react-redux";
 class Ask_new extends Component {
    render() {
        return (
            <div className={ask.main}>
                {this.props.state.ask.news.map((item,index)=>{
                    // console.log(this.props.state)
                    return(
                        <div className={ask.article} key={index}>
                            <a href={`/question/${item.contentId}?clientId=${item.clientId}`}>{item.coverTitle}</a>
                            <div className={ask.content}>
                                <img
                                    src={item.recipe.image}
                                    alt=""/>
                                <div className={ask.cont}>
                                    <p className={ask.cont_title}>{item.recipe.title}</p>
                                    <p className={ask.author} style={item.recipeStepNums>0 ? {color: '#FF8A6D'}:{}}>{(item.recipeStepNums>0?`在第${item.recipeStepNums}个步骤提问`:`作者：${item.recipe.clientName}`)}</p>
                                </div>
                            </div>
                            <div className={ask.go_answers}>
                                <div className={ask.img}>
                                    <img
                                        src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'}
                                        alt=""/>
                                </div>
                                <div className={ask.write}>写答案</div>
                            </div>
                            <div className={item.answerNum>0 ? ask.the_answers : [`${ask.the_answers}`, `${ask.none}`].join(' ')}>
                                {item.answerNum>0 ? `${item.answerNum}个回答` : '暂无回答'}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
    componentWillMount() {
        this.props.getNews()
    }
}
export default connect(state => ({state: state}), {getNews})(Ask_new)
