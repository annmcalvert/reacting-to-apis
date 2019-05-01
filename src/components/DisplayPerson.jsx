import React from 'react';

const DisplayPerson = (props) => {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">{props.person.name}</div>
            <div className="card-body">
                <p className="card-text">Age: {props.person.age}</p>
                <p className="card-text">Gender: {props.person.gender}</p>
                {/* <p className="card-text">{props.person.url}</p> */}
                <a href={props.person.url} target="_blank">More Info</a>
            </div>
        </div>
    )
}

export default DisplayPerson;