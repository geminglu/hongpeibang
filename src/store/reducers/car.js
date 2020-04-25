// 购物车模块
const initState = {}

function car(state = initState, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "JOIN_CAR":
            const info = state.find(item => item.goodsID === action.payload.goodsID)
            if (info) {
                info.num++
            } else {
                state.push({...action.payload, num: 1})
            }
            break;
    }
    return state
}

export default car