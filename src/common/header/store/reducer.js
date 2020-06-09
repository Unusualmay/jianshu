// reducer返回的是一个纯函数，也就是有固定输入，就会有固定输出的
import {constant} from "./index";

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === constant.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === constant.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}
