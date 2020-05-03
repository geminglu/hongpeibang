import {GETSTU, GETCOMMEND, COURSE} from "../actioinType";

const initState = {
    nav: [],
    commend: [],
    cetcommend: []
}

function stu(state = initState, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GETSTU:    // 导航栏
            state.nav = action.payload.item
            break;
        case COURSE:    // 推荐课程
            state.commend = action.payload.item
            break;
        case GETCOMMEND:
            action.payload.item.splice(0, 1)
            state.cetcommend = action.payload.item
            break;
    }
    return state
}

export default stu