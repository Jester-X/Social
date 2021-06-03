import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    requestUsers,
    unfollow,
} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers
} from "../../redux/selectors/usersSelectors";

const UsersContainer = props => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize)
    }, [])

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize)
    }

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            users={props.users}
            followingInProgress={props.followingInProgress}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    </>
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestUsers, follow, unfollow})
)(UsersContainer)
