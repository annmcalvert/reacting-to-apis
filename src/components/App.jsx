import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';
// import 'isomorphic-fetch';
// import 'es6-promises';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    title: 'Movie 1',
                    description: '1986'
                },
                {
                    title: 'Movie 2',
                    description: '2014'
                }
            ]
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    movies: obj
                })
            })
        // .then(obj => {console.log(obj)} )
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