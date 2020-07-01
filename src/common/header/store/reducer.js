// reducer返回的是一个纯函数，也就是有固定输入，就会有固定输出的
import {constant} from "./index";
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constant.SEARCH_FOCUS:
            //immutable对象的set方法，会结合之前的immutable对象的值
            //和设置的值，返回一个全新的对象
            return state.set('focused', true)
        case constant.SEARCH_BLUR:
            return state.set('focused', false)
        case constant.GET_LIST:
            return state.set('list', action.data)
        default:
            return state
    }
    // if (action.type === constant.SEARCH_FOCUS) {
    //     //immutable对象的set方法，会结合之前的immutable对象的值
    //     //和设置的值，返回一个全新的对象
    //     return state.set('focused', true)
    // }
    // if (action.type === constant.SEARCH_BLUR) {
    //     return state.set('focused', false)
    // }
    // if (action.type === constant.GET_LIST) {
    //     // console.log(action)
    //     return state.set('list', action.data)
    // }
    // return state;
}
