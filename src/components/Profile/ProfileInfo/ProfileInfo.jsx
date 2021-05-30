import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import smallPhoto from './../../../assets/images/smallPhoto.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src='' alt='Background img'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null
                        ? props.profile.photos.large : props.profile.photos.small != null
                        ? props.profile.photos.small : smallPhoto}
                    alt='ProfilePhoto'
                />
                <span>{props.profile.fullName}</span> <br/>
                <ProfileStatus status={props.status}
                               updateUserStatus={props.updateUserStatus}/>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
            <div>
                {props.profile.lookingForAJob === true ? `LOOKING FOR A JOB: ${props.profile.lookingForAJobDescription}`
                    : `I'm not Looking for a Job`}
            </div>
        </div>
    )
}

export default ProfileInfo;