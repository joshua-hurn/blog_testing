import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
    return (
        <div className="blogCards col-md-12">
            <div className="card mb-2">
                <div className="card-header bg-secondary text-white">
                    {props.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                </div>
            <Link to={`/blogs/${props.id}`}>View Post</Link>
            </div>
        </div>
    )
}

export default BlogCard;