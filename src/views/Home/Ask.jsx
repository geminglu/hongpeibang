import React, {Component} from 'react';
import ask from '../../style/home/ask.module.scss'
export default class Ask extends Component {
    render() {
        return (
            <div className={ask.ask}>
                <div className={ask.title}>
                    <div className={ask.title_t}>
                        <span className={ask.questions}>
                        提问
                    </span>
                        <span className={ask.answers}>
                        <img src={'https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48'} alt=""/>
                    </span>
                        <div className={ask.search}>
                            <div className={ask.input}>
                                <span>搜索问题</span>
                            </div>
                        </div>
                    </div>
                    <div className={ask.title_b}>
                        <div className={ask.nav}>
                            <span>精华问答</span>
                            <div className={ask.line}>
                            </div>
                        </div>
                        <div className={[`${ask.nav}`,`${ask.active}`].join(' ')}>
                            <span>最新问题</span>
                            <div className={ask.line}>
                            </div>
                        </div>
                        <div className={ask.nav}>
                            <span>最热问题</span>
                            <div className={ask.line}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ask.top}>
                </div>
                <div className={ask.main}>
                    <div className={ask.article}>
                        <a href="#">标题标题标题标题标题标题标题标题标题</a>
                        <div className={ask.content}>
                            <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
                            <div className={ask.cont}>
                                <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                                <p className={ask.author}>作者：某某某</p>
                            </div>
                        </div>
                        <div className={ask.go_answers}>
                            <div className={ask.img}>
                                <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
                            </div>
                            <div className={ask.write}>写答案</div>
                        </div>
                        <div className={[`${ask.the_answers}`,`${ask.none}`].join(' ')}>
                            暂无回答
                        </div>
                    </div>
                    <div className={ask.article}>
                        <a href="#">标题标题标题标题标题标题标题标题标题</a>
                        <div className={ask.content}>
                            <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
                            <div className={ask.cont}>
                                <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                                <p className={ask.author}>作者：某某某</p>
                            </div>
                        </div>
                        <div className={ask.go_answers}>
                            <div className={ask.img}>
                                <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
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
                            <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
                            <div className={ask.cont}>
                                <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                                <p className={ask.author}>作者：某某某</p>
                            </div>
                        </div>
                        <div className={ask.go_answers}>
                            <div className={ask.img}>
                                <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
                            </div>
                            <div className={ask.write}>写答案</div>
                        </div>
                        <div className={[`${ask.the_answers}`,`${ask.none}`].join(' ')}>
                            暂无回答
                        </div>
                    </div>
                    <div className={ask.article}>
                        <a href="#">标题标题标题标题标题标题标题标题标题</a>
                        <div className={ask.content}>
                            <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
                            <div className={ask.cont}>
                                <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                                <p className={ask.author}>作者：某某某</p>
                            </div>
                        </div>
                        <div className={ask.go_answers}>
                            <div className={ask.img}>
                                <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
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
                            <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
                            <div className={ask.cont}>
                                <p className={ask.cont_title}>标题标题标题标题标题标题标题标题</p>
                                <p className={ask.author}>作者：某某某</p>
                            </div>
                        </div>
                        <div className={ask.go_answers}>
                            <div className={ask.img}>
                                <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
                            </div>
                            <div className={ask.write}>写答案</div>
                        </div>
                        <div className={ask.the_answers}>
                            100个回答
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



// <div className={'ask'}>
//     <div className={'title'}>
//         <div className={'title-t'}>
//                         <span className={'questions'}>
//                         提问
//                     </span>
//             <span className={'answers'}>
//                         <img src={'https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48'} alt=""/>
//                     </span>
//             <div className={'search'}>
//                 <div className={'input'}>
//                     <span>搜索问题</span>
//                 </div>
//             </div>
//         </div>
//         <div className={'title-b'}>
//             <div className={'nav'}>
//                 <span>精华问答</span>
//                 <div className={'line'}>
//
//                 </div>
//             </div>
//             <div className={'nav active'}>
//                 <span>最新问题</span>
//                 <div className={'line'}>
//
//                 </div>
//             </div>
//             <div className={'nav'}>
//                 <span>最热问题</span>
//                 <div className={'line'}>
//
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className={'top'}>
//     </div>
//     <div id={'main'}>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers none'}>
//                 暂无回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
//         <div className={'article'}>
//             <a href="#">标题标题标题标题标题标题标题标题标题</a>
//             <div className={'content'}>
//                 <img src={'https://image.hongbeibang.com/FhcfA6Gg3Fb9D6hqjkffuXahH3Wg?1080X810&imageView2/1/w/70/h/70'} alt=""/>
//                 <div className={'cont'}>
//                     <p className={'cont-title'}>标题标题标题标题标题标题标题标题</p>
//                     <p className={'author'}>作者：某某某</p>
//                 </div>
//             </div>
//             <div className={'go-answers'}>
//                 <div className={'img'}>
//                     <img src={'https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40'} alt=""/>
//                 </div>
//                 <div className={'write'}>写答案</div>
//             </div>
//             <div className={'the-answers'}>
//                 100个回答
//             </div>
//         </div>
{/*    </div>*/}
{/*</div>*/}