import {GETSTU, GETCOMMEND, COURSE, GETBAIKE, GETLESSON} from "../actioinType";

const initState = {
    nav: [],
    commend: [],
    cetcommend: [],
    baike: [],
    lesson: {},
    introduces: []
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
        case GETBAIKE:  // 技巧百科
            state.baike = action.payload.item
            break;
        case GETLESSON:  // 教程
            state.lesson = action.payload.item
            state.introduces = action.payload.item.introduces
            break;
    }
    return state
}

export default stu