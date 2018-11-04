import  { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/authActions';

const initialState = {
    isLoggedIn: false,
    message: '',
    err: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case LOGIN_FAILED:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export default authReducer;