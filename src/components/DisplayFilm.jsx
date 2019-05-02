import React from 'react';

const DisplayFilm = ({ film: { title, description } }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default DisplayFilm;