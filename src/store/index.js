import {
    createStore,    // 创建仓库
    applyMiddleware,    // 应用中间件
    compose
} from 'redux';
import thunk from 'redux-thunk';    // 异步的actioin中间件
import rootReducer from './reducers/index'

const middleware = [thunk];

const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__()&&window.__REDUX_DEVTOOLS_EXTENSION__()    // 调试工具
))

// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
