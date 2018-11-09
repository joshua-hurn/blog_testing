import React from 'react';

const Jumbotron = () => {
    return (
        <div className="row mt-3">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid bg-secondary text-white">
                    <div className="container">
                        <h1 className="display-4">Blog</h1>
                        <p className="lead">The latest.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;