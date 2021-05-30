import {addProfilePost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {addProfilePost})(MyPosts);;