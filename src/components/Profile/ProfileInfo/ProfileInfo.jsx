import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import smallPhoto from './../../../assets/images/smallPhoto.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
            <div>
                <img src='' alt='Background img'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large != null
                        ? profile.photos.large : profile.photos.small != null
                        ? profile.photos.small : smallPhoto}
                    alt='ProfilePhoto'
                />
                <span>{profile.fullName}</span> <br/>
                <ProfileStatus status={status}
                               updateUserStatus={updateUserStatus}/>
                <div>
                    {profile.aboutMe}
                </div>
            </div>
            <div>
                {profile.lookingForAJob === true ? `LOOKING FOR A JOB: ${profile.lookingForAJobDescription}`
                    : `I'm not Looking for a Job`}
            </div>
        </div>
    )
}

export default ProfileInfo;