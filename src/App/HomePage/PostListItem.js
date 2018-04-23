import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = (props) => {
    return (
        <div class="card horizontal">
            <div class="card-image" >
                <img src='https://i.pinimg.com/originals/d6/95/9d/d6959db283e2a4f070939f1d419b9d2d.jpg' id="photo-post" />
            </div>
            <div class="card-stacked">
                <span class="card-title"><Link to={`posts${props.post.postId}`}><h4>{props.post.title}</h4></Link></span>
                <div class="card-content">
                    <p>{props.post.text}</p>
                </div>
            </div>
        </div>
    )
}


export default PostListItem;