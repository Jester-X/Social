import {profileAPI} from "../api/api";

const ADD_PROFILE_POST = 'ADD-PROFILE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    profile: null,
    status: '',
    posts: [
        {id: 1, message: 'Im the first user', likesCount: '1'},
        {id: 2, message: 'Im so alone', likesCount: '0'}
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}

        case ADD_PROFILE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        message: action.newPostValue,
                        likesCount: 0
                    }
                ],
            }
        default:
            return state;
    }
}

export const addProfilePost = (newPostValue) => ({type: ADD_PROFILE_POST, newPostValue})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getUserStatus = (userId = 17283) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data))
        })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export default profileReducer;