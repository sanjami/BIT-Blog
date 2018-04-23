import React from 'react';
import PostsListItem from './PostListItem';

const PostsList = (props) => {
    return (
        <div className='container' grey lighten-5>
        <div id='main-title'>
            <h2 >POSTS</h2>
        </div>
            <div className='row'>
                <div className='col s12'>
                    {props.posts.map((post) => {
                        return <PostsListItem post={post} key={post.postId} />
                    })}
                </div>
            </div>
        </div>
    )
}


export default PostsList;