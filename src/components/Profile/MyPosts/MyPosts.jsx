import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' likesCount='0' />
                <Post message='Its my first post' likesCount='23'/>
            </div>
        </div>
    )
}

export default Myposts;