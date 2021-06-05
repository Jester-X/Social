import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostForm from "./NewPostForm";


const MyPosts = React.memo(({profilePage, addProfilePost, ...props}) => {
    let posts = profilePage.posts.map(p => <Post message={p.message}
                                                       likesCount={p.likesCount}
                                                       key={p.id} />);

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <NewPostForm addProfilePost={addProfilePost}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
})

export default MyPosts