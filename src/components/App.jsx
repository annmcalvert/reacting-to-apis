import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    title: 'Movie 1',
                    year: '1986'
                },
                {
                    title: 'Movie 2',
                    year: '2014'
                }
            ]
        };
    }

render() {
    return (
        <div className="container">
            <h1>Movies</h1>
            {this.state.movies.map(movie => <DisplayMovie movie={movie} />)}
        </div>
    )
}

}

export default App;