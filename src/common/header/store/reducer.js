// reducer返回的是一个纯函数，也就是有固定输入，就会有固定输出的
const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state;
}
