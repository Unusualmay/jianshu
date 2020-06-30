import * as constant from './constant';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
    type: constant.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constant.SEARCH_BLUR
});

export const getHeaderList = (data) => ({
    type: constant.GET_LIST,
    data
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/header.json')
            .then((res) => {
                const data = res.data
                console.log(data.data)
                dispatch(getHeaderList(fromJS(data.data)))
            })
            .catch(() => {
                console.log('error');
            })
    }
}
