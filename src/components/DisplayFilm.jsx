import React from 'react';

const DisplayFilm = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{props.film.title}</div>
            <div className="card-body">
                <p className="card-text">{props.film.description}</p>
            </div>
        </div>
    )
}

export default DisplayFilm;