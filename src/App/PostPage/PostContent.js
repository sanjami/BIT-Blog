import React from 'react';
import { Link } from "react-router-dom";
import BackButton from '../SharedComponents/BackButton';

const PostContent = (props) => {
    return (
        <React.Fragment>
        <BackButton/>
        <div className="container center-align" id="one-post">       
            <h2>{props.post.title}</h2>
            <Link to={`/author${props.post.authorId}`}>{props.authorName}</Link>
            <p>{props.post.text}</p>
         </div>
         </React.Fragment>  
    )
}


export default PostContent;