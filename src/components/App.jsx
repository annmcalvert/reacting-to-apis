import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';
import DisplayPeople from './DisplayPeople';
// import ShowList from './ShowList';
// import 'isomorphic-fetch';
// import 'es6-promises';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            people: [],
            isMovieListVisible: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(
                (movies) => {
                this.setState({ movies: movies });
                });
            // .then(obj => console.log(obj));

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
                    Load Films
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Load people
                    </button>
                {/* {
                    this.state.isMovieListVisible */}
                        {this.state.movies.map(movie => <DisplayMovie key={movie.id} movie={movie} />)}
                        {/* : this.state.people.map(person => <DisplayPeople key={person.id} person={person} />)
                } */}
            </div >
        )
    }

}

export default App;