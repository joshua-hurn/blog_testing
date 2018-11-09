import React from 'react';

const BlogCard = (props) => {
    return (
        <div className="blogCards col-md-12">
            <div className="card mb-2">
                <div className="card-header bg-secondary text-white">
                    {props.blog.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.blog.content}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;