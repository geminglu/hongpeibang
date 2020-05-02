import React, {Component} from 'react';
import style from '../../../style/home/ask.module.scss'
class AskQuintessence extends Component {
    render() {
        return (
            <div className={style.main}>
                <div className={style.article2}>
                    <div className={style.author_pic}>
                        <div className={style.author_img}>
                            <img
                                src={'https://image.hongbeibang.com/FqCaP4h266sZCF0dk5EOMSKkdm6X?640X640&imageView2/1/w/80/h/80'}
                                alt=""/>
                        </div>
                    </div>
                    <div className={style.author}>
                        <div className={style.expert}>
                            <img src={'https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80'} alt=""/>
                        </div>
                        <div className={style.author_name}>高高的美食天地</div>
                    </div>
                    <a href="#">
                        <div className={style.problem}>
                            问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容问题内容
                        </div>
                        <div className={style.answer}>
                            回答内容回答内容回答内容回答内容回答内容回答内容回答内容回答内容回答内容回答内容
                        </div>
                    </a>
                    <div className={style.commend}>
                        100个赞
                    </div>
                </div>
            </div>
        );
    }
}

export default AskQuintessence;