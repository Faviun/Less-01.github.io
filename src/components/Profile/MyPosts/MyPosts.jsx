import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Myposts;