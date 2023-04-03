import React from 'react';
import s from './Post.module.css';;

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://kartinkin.net/uploads/posts/2022-12/1670434447_1-kartinkin-net-p-smeshnie-monstri-kartinki-oboi-1.jpg'  />
            {props.message}
            <div className={s.likes}><span>like   {props.likesCount}</span></div>
        </div>
    )
}

export default Post;