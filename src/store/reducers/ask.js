import {GETASKNEWS, GETASKHOT, GETASKESSENCE} from '../actioinType'

const initState = {
    news: [],
    hot:[],
    essence:[]
}

function ask(state = initState, {type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    switch (type) {
        case GETASKNEWS:
            state.news = payload.item
            break;
        case GETASKHOT:
            state.hot = payload.item
            break;
        case GETASKESSENCE:
            state.essence = payload.item
            break;
    }
    return state
}

export default ask
