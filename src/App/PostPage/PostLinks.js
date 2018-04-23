import React from 'react';
import { Link } from "react-router-dom";

const PostLinks = (props) => {

    return (
        <div className='container' grey lighten-5>
            <div id='main-title'>
                <h4 >3 more posts from same author</h4>
            </div>
            <div className='row'>
                <div className='col s12'>
                    {props.authorsPosts.slice(0, 3).map((post) => {
                        return (<div className='col s4'>
                        <div class="card" id="card-3">
                            <div class="card-image" >
                                <img src='https://i.pinimg.com/originals/d6/95/9d/d6959db283e2a4f070939f1d419b9d2d.jpg' id="photo-post" />
                            </div>
                            <span class="card-title">
                                <Link to={`/posts${post.id}`} className="collection-item" key={post.id}>{post.title}</Link>
                            </span>
                        </div>
                        </div>
                        )
                    })}
                    </div>
                    </div>
            </div>)}


export default PostLinks;