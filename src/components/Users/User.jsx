import React from 'react';
import s from "./Users.module.css";
import userDefaultPhoto from "../../assets/images/smallPhoto.png";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userDefaultPhoto}
                             alt='avatar'/>
                    </NavLink>
                </div>
                 <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </span>
        </div>
    )
}

export default User;