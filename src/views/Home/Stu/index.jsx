import React, {Component} from 'react';
import style from '../../../style/home/stu/home.module.scss'
import Topnav from '../../../components/Topnav'

class Stu extends Component {
    render() {
        return (
            <div>
                <Topnav>
                    <div position="top_left">左</div>
                    <div position="top_right">右</div>
                    <div position="top_center">中</div>
                </Topnav>
                <div className={style.nav}>
                    <ul>
                        <li>
                            <img src={require('../../../images/1.png')} />
                            <span>技巧百科</span>
                        </li>
                        <li>
                            <img src={require('../../../images/1.png')} />
                            <span>技巧百科</span>
                        </li>
                        <li>
                            <img src={require('../../../images/1.png')} />
                            <span>技巧百科</span>
                        </li>
                        <li>
                            <img src={require('../../../images/1.png')} />
                            <span>技巧百科</span>
                        </li>
                    </ul>
                </div>
                <div className={style.conent}>
                    <ul>
                        <li>
                            <h2>推荐课程</h2>
                            <ul>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                                <li>
                                    <img src={require('../../../images/fera.png')} />
                                    <h3>3款卷不裂的蛋糕卷（黑糖红枣/紫芋椰香/香浓栗子）</h3>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Stu;