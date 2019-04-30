import React from 'react';

const DisplayMovie = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div classname="card-header">{props.movie.title}</div>
            <div className="card-body">
                <p className="card-text">{props.movie.year}</p>
            </div>
        </div>
    )
};

export default DisplayMovie;