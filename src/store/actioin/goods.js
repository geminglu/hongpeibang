//范围随机数（正整数）
import { get, post } from "../../api"

function random(max, min) {
    return (Math.round(Math.random() * (max - min) + min));
}

export function addGoods(name, price) {
    return {
        type: "ADD_GOODS",
        payload: {
            goodsID: Date.now() + random(1000, 9999),
            name,
            price
        }
    }
}

//异步的action
export function getGoods() {
    return dispatch => {
        console.log(get)
        get("/api/www").then(res=>console.log(res))
        // axios("/api/www").then(({data}) => {
        //     dispatch(addGoods(data.name, data.price))   // 调用同步action方法
        // })

    }


}