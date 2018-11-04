import { LoginRequest } from '../services/loginServices';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';



export const Login = (payload) => dispatch => {
    LoginRequest(payload)
        .then((res, err) => {
            if (err) {
                dispatch({ type: LOGIN_FAILED, payload: err })
            } else {
                if (res.data.token) {
                    localStorage.setItem('authToken', res.data.token);
                    dispatch({ type: LOGIN_SUCCESS, payload: { isLoggedIn: true } })
                } else {
                    dispatch({ type: LOGIN_FAILED, payload: { isLoggedIn: false, message: 'Token not found.' } })
                }
            }

        })
        .catch(err => {
                debugger;
        })
}