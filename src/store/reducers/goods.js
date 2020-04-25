// 商品模块
const initState = {
    goodsLIst: [
        {
            goodsID: 242342342,
            name: "西瓜",
            price: 12
        }
    ]
}

function goods(state = initState, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "ADD_GOODS":
            state.goodsLIst.push(action.payload)
            break;
    }
    return state
}

export default goods