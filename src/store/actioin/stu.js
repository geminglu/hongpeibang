import {get, post} from "../../api"
import {GETSTU, GETCOMMEND, COURSE, GETBAIKE, GETLESSON} from '../actioinType'

// 修改导航栏状态
export function stestu(item) {
    return {
        type: GETSTU,
        payload: {
            item
        }
    }
}

// 修改推荐课程状态
export function stecommend(item) {
    return {
        type: COURSE,
        payload: {
            item
        }
    }
}

// 修改课程状态
export function stecourse(item) {
    return {
        type: GETCOMMEND,
        payload: {
            item
        }
    }
}

// 设置技巧百度数据
export function setbaike(item) {
    return {
        type: GETBAIKE,
        payload: {
            item
        }
    }
}

// 教程
export function setlesson(item) {
    return {
        type: GETLESSON,
        payload: {
            item
        }
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////


//请求数据调用同步的方法修改导航栏数据
export function getstu() {
    return dispatch => {
        get('/hpb/index/get?_t=1588418180044&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM')
            .then(res => dispatch(stestu(res.data.category[0].item)))
    }
}

//请求推荐课程接口
export function getcommend() {
    return dispatch => {
        get('/hpb/recommend/getRandContent?_t=1588428642993&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM&type=3&pageSize=10')
            .then(res => dispatch(stecommend(res.data.data)))
    }
}

// 请求课程接口
export function getcourse() {
    return dispatch => {
        get('/hpb/education/getIndexByWeb?_t=1588480827744&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM')
            // .then(res => dispatch(stecourse(res.data.data)))
            .then(res => dispatch(stecourse(res.data.category)))
    }
}

// 获取技巧百科数据
export function getbaike() {
    return dispatch => {
        get('/hpb/education/getNewbieGuide?type=5&_t=1589001486862&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM')
            .then(res => dispatch(setbaike(res.data.courseGuide)))
    }
}

// 教程
export function getlesson(id) {
    return dispatch => {
        get('/hpb/education/getCourse?_t=1589015023304&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzcwMjI2NiwiaWF0IjoxNTg4Mzk5ODY2fQ.2ZdCLF8x0BY3bPZFxsNfF4DfWhcRxi90CeG6eFuCzqM&educationCourseId='+id)
            .then((res) => {
                if (res.data) {
                    console.log(123)
                    dispatch(setlesson(res.data))
                }
            })
            // .then(res => dispatch(setlesson(res.data)))
    }
}









