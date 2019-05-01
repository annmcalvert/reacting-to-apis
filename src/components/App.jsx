import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';
import DisplayPerson from './DisplayPerson';
import { isFlowBaseAnnotation } from '@babel/types';
// import ShowList from './ShowList';
// import 'isomorphic-fetch';
// import 'es6-promises';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            people: [],
            isMovieListVisible: false,
            isPeopleListVisible: false
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(
                (movies) => {
                    this.setState({ movies: movies });
                    return fetch("https://ghibliapi.herokuapp.com/people");
                })
            .then(res => res.json())
            .then(
                (people) => {
                    this.setState({ people: people });
                })
    }

    // handleClick = () => {
    //     this.setState({
    //         isMovieListVisible: !this.state.isMovieListVisible

    //     })
    // }

    handleClickMovies = () => {
        this.setState({
            isMovieListVisible: !this.state.isMovieListVisible,
            isPeopleListVisible: false
        })
    }

    handleClickPeople = () => {
        this.setState({
            isPeopleListVisible: !this.state.isPeopleListVisible,
            isMovieListVisible: false
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Movies</h1>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClickMovies}
                >
                    Load Films
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClickPeople}
                >
                    Load People
                    </button>

                {/* {this.state.movies.map(movie => <DisplayMovie key={movie.id} movie={movie} />)} */}

                {this.state.isMovieListVisible &&
                    this.state.movies.map(movie => <DisplayMovie key={movie.id} movie={movie} />)
                }

                {this.state.isPeopleListVisible &&
                    this.state.people.map(person => <DisplayPerson key={person.id} person={person} />)
                }

                {/* <button
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Load Films
                </button>
                <button
                    className="btn btn-primary"
                    onClick={this.handleClick}
                >
                    Load People
                    </button> */}

                {/* {this.state.isMovieListVisible
                    ? this.state.movies.map(movie => <DisplayMovie key={movie.id} movie={movie} />)
                    : this.state.people.map(person => <DisplayPeople key={person.id} person={person} />)
                } */}

            </div >
        )
    }

}

export default App;