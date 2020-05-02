import {GETSTU,GETCOMMEND} from "../actioinType";

const initState = {
    nav:[],
    commend:[]
}

function stu(state = initState, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GETSTU:    // 导航栏
            state.nav = action.payload.item
            break;
        case GETCOMMEND:    // 推荐课程
            state.commend = action.payload.item
    }
    return state
}

export default stu