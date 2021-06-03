import {authAPI} from "../api/api";
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_ERROR = 'SET_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    error: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}})

export const setError = (error) => ({type: SET_ERROR, error});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }

        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                dispatch(setError(response.data.messages[0]))
            }
        })

}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })

}


export default authReducer;