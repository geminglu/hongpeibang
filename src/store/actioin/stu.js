import {get, post} from "../../api"
import {GETSTU,GETCOMMEND} from '../actioinType'

// 修改导航栏状态
export function stestu(item) {
    return {
        type: GETSTU,
        payload: {
            item
        }
    }
}

// 修改导航栏状态
export function stecommend(item) {
    return {
        type: GETCOMMEND,
        payload: {
            item
        }
    }
}



//请求数据调用同步的方法修改导航栏数据
export function getstu() {
    return dispatch => {
        get('hpb/index/get?_t=1588418180044&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM')
            .then(res => dispatch(stestu(res.data.category[0].item)))
    }
}

//请求推荐课程接口
export function getcommend() {
    return dispatch => {
        get('hpb//recommend/getRandContent?_t=1588428642993&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM&type=3&pageSize=10')
            .then(res => dispatch(stecommend(res.data.data)))
    }
}
