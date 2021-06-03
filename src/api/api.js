import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'b32fe204-8fd9-482a-9c44-3f091bda90a1'
    }
});

export const usersAPI = {
    requestUsers(currentPage = 1, pageSize=10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data})
    },
    unfollow(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then(response=> {return response.data})
    },
    follow (userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response=> {return response.data})
    }
}

export const authAPI = {
    authMe() {
        return instance
            .get(`auth/me`)
            .then(response => {return response.data})
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance
            .get(`profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance
            .get(`/profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance
            .put(`/profile/status/`, {status})
    }
}

