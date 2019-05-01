import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';
// import ShowList from './ShowList';
// import 'isomorphic-fetch';
// import 'es6-promises';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isMovieListVisible: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(movies => {
                this.setState({
                    movies: movies
                })
            })
    }

    handleClick = () => {
        this.setState({ isMovieListVisible: !this.state.isMovieListVisible })
    }

    render() {
        return (
            <div className="container">
                <h1>Movies</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Click Me
            </button>
                {
                    this.state.isMovieListVisible &&
                    this.state.movies.map(movie => <DisplayMovie key={movie.id} movie={movie} />)
                }
            </div>
        )
    }

}

export default App;