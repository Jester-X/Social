import React from 'react';
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = ({
                   onPageChanged,
                   currentPage,
                   totalUsersCount,
                   pageSize,
                   followingInProgress,
                   follow,
                   unfollow,
                   ...props
               }) => {
    return <>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
        <div className={s.users}>{props.users.map(u =>
            <User key={u.id}
                  user={u}
                  followingInProgress={followingInProgress}
                  follow={follow}
                  unfollow={unfollow}
            />)
        }</div>
    </>
}

export default Users;