import {get} from "../../api"
import {GETASKNEWS,GETASKHOT,GETASKESSENCE} from '../actioinType'

export function news(item) {
    return {
        type: GETASKNEWS,
        payload: {
            item
        }
    }
}

export function hot(item) {
    return {
        type: GETASKHOT,
        payload: {
            item
        }
    }
}

export function essence(item) {
    return {
        type: GETASKESSENCE,
        payload: {
            item
        }
    }
}

//请求数据调用同步的方法修改导航栏数据
export function getNews() {
    return dispatch => {
        get('/hpb/question/getNew?_t=' + Date.now() + '&pageIndex=0&pageSize=10')
            .then(res => {
                const {data} = res.data.content;
                console.log(res);
                dispatch(news(data))
            })
    }
}

export function getHot() {
    return dispatch => {
        get('/hpb/question/getHot?_t=' + Date.now() + '&pageIndex=0&pageSize=10')
            .then(res => {
                const {data} = res.data.content;
                console.log(res);
                dispatch(hot(data))
            })
    }
}

export function getEssence() {
    return dispatch => {
        get('/hpb/question/getEssence?_t=' + Date.now() + '&pageIndex=0&pageSize=10')
            .then(res => {
                const {data} = res.data.content;
                console.log(res);
                dispatch(essence(data))
            })
    }
}