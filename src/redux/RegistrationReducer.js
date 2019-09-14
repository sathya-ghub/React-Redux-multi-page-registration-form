import * as ActionTypes from './ActionTypes';

export const Registration = (state = { users:[] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, users: state.users.concat(action.payload) };
        default:
            return state;
    }
};