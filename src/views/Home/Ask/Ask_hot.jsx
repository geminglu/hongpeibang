import React, {Component} from 'react';
import ask from "../../../style/home/ask.module.scss";

class AskHot extends Component {
    render() {
        return (
            <div className={ask.main}>
                热门
                <div className={ask.article}>
                    <a href="#">标题标题标题标题标题标题标题标题标题</a>
                    <div className={ask.content}>
                        <img
                            src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'}
                            alt=""/>
                        <div className={ask.cont}>
                            <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                            <p className={ask.author}>作者：某某某</p>
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
                    <div className={[`${ask.the_answers}`, `${ask.none}`].join(' ')}>
                        暂无回答
                    </div>
                </div>
                <div className={ask.article}>
                    <a href="#">标题标题标题标题标题标题标题标题标题</a>
                    <div className={ask.content}>
                        <img
                            src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'}
                            alt=""/>
                        <div className={ask.cont}>
                            <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                            <p className={ask.author}>作者：某某某</p>
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
                    <div className={ask.the_answers}>
                        100个回答
                    </div>
                </div>
                <div className={ask.article}>
                    <a href="#">标题标题标题标题标题标题标题标题标题</a>
                    <div className={ask.content}>
                        <img
                            src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'}
                            alt=""/>
                        <div className={ask.cont}>
                            <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                            <p className={ask.author}>作者：某某某</p>
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
                    <div className={[`${ask.the_answers}`, `${ask.none}`].join(' ')}>
                        暂无回答
                    </div>
                </div>
                <div className={ask.article}>
                    <a href="#">标题标题标题标题标题标题标题标题标题</a>
                    <div className={ask.content}>
                        <img
                            src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'}
                            alt=""/>
                        <div className={ask.cont}>
                            <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                            <p className={ask.author}>作者：某某某</p>
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
                    <div className={ask.the_answers}>
                        100个回答
                    </div>
                </div>
                <div className={ask.article}>
                    <a href="#">标题标题标题标题标题标题标题标题标题</a>
                    <div className={ask.content}>
                        <img
                            src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'}
                            alt=""/>
                        <div className={ask.cont}>
                            <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                            <p className={ask.author}>作者：某某某</p>
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
                    <div className={ask.the_answers}>
                        100个回答
                    </div>
                </div>
            </div>
        );
    }
}

export default AskHot;