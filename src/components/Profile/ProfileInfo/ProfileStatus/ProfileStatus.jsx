import React from 'react'


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'change your status'}
                        </span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true}
                               onFocus={(e)=>{e.target.select()} }
                               onChange={this.onStatusChange}
                               value={this.state.status}
                               onBlur={this.deactivateEditMode}

                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;