import * as types from 'constants/ActionTypes';

const asyncReducer = (action) => {
    switch (action.type) {
        case types.FETCH_SUCCESSED:
            /*
            * can do more thing, and handle Json data format
            */
            return {
            	url: action.data.url.current_user_url
            };
        default:
            return action.data;
    };
};

export default asyncReducer;