import * as ActionTypes from './ActionTypes';

export const signupUser = (user) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_USER,
        payload: user
    })
};

