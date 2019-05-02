import React from 'react';

const DisplayPerson = ({ person: { name, age, gender, url } }) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <p className="card-text">Age: {age}</p>
                <p className="card-text">Gender: {gender}</p>
                <a href={url} target="_blank" rel="noopener noreferrer">More Info</a>
            </div>
        </div>
    )
}

export default DisplayPerson;