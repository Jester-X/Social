import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

const ProfileContainer = props => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = props.authorizedUserId
        }
        if (!userId) {
            props.history.push('/login')
        }
        if (userId) {
            props.getUserProfile(userId)
            props.getUserStatus(userId)
        }
    }, [])

    return <Profile {...props}
                    profile={props.profile}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
    />

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})
)(ProfileContainer)
