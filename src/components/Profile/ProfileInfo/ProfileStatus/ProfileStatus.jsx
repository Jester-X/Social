import React, {useEffect, useState} from 'react'


const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = () => {
        if (editMode) {
            setEditMode(false)
            props.updateUserStatus(status)
        } else setEditMode(true)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ? <div>
                        <span onDoubleClick={toggleEditMode}>
                            Status: {props.status || 'status placeholder..'}
                        </span>
                </div>
                :
                <div>
                    <input autoFocus={true}
                           onFocus={(e) => {
                               e.target.select()
                           }}
                           onChange={onStatusChange}
                           value={status}
                           onBlur={toggleEditMode}

                    />
                </div>
            }
        </div>
    );
}

export default ProfileStatus;