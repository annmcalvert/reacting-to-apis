import React from 'react';

const DisplayPeople = (props) => {
   

   
        
            return (
                <div className="card bg-light mb-3">
                    <div className="card-header">{props.person.name}</div>
                    <div className="card-body">
                        <p className="card-text">{props.person.age}</p>
                        <p className="card-text">{props.person.gender}</p>
                    </div>
                </div>

            )
       
}

export default DisplayPeople;