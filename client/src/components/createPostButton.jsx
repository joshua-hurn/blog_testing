import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../services/user';

const CreatePost = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-info" to="/compose">Create a Post</Link>;
    } else {
        return null;
    }
};

export default CreatePost;