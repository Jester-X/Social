import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZE_SUCCESS = 'SET_INITIALIZE_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializeSuccess = () => ({type: SET_INITIALIZE_SUCCESS})

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserData())
    dispatch(initializeSuccess())
}


export default appReducer;