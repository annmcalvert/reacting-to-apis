import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie';
import DisplayPerson from './DisplayPerson';
import logo from './logo.png';
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
                <img src={logo}></img>
                <br></br>
                <button
                    className="btn btn-primary m-5"
                    onClick={this.handleClickMovies}
                >
                    {this.state.isMovieListVisible ? "Hide Films" : "Show Films"}
                </button>
                <button
                    className="btn btn-primary m-5"
                    onClick={this.handleClickPeople}
                >
                    {this.state.isPeopleListVisible ? "Hide People" : "Show People"}
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