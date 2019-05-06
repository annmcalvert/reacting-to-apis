import React, { Component } from 'react';
import DisplayFilm from './DisplayFilm';
import DisplayPerson from './DisplayPerson';
import logo from './logo.png';
// import 'isomorphic-fetch';
// import 'es6-promises';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            isFilmListVisible: false,
            isPeopleListVisible: false
        };
    }

    async componentDidMount() {
        try {
            let rFilms = await fetch("https://ghibliapi.herokuapp.com/films");
            let films = await rFilms.json();
            let rPeople = await fetch("https://ghibliapi.herokuapp.com/people");
            let people = await rPeople.json();
            this.setState({ films, people });
        } catch (error) {
            console.log(error);
        }
    }

    // componentDidMount() {
    //     fetch("https://ghibliapi.herokuapp.com/films")
    //         .then(res => res.json())
    //         .then(
    //             (films) => {
    //                 this.setState({ films });
    //                 return fetch("https://ghibliapi.herokuapp.com/people");
    //             })
    //         .then(res => res.json())
    //         .then(
    //             (people) => {
    //                 this.setState({ people });
    //             })
    // }

    handleClickfilms = () => {
        this.setState({
            isFilmListVisible: !this.state.isFilmListVisible,
            isPeopleListVisible: false
        })
    }

    handleClickPeople = () => {
        this.setState({
            isPeopleListVisible: !this.state.isPeopleListVisible,
            isFilmListVisible: false
        })
    }

    render() {
        return (
            <div className="container">
                <img src={logo} alt="logo"></img>
                <br></br>
                <button
                    className="btn btn-primary m-5"
                    onClick={this.handleClickfilms}
                >
                    {this.state.isFilmListVisible ? "Hide Films" : "Show Films"}
                </button>
                <button
                    className="btn btn-primary m-5"
                    onClick={this.handleClickPeople}
                >
                    {this.state.isPeopleListVisible ? "Hide People" : "Show People"}
                </button>
                {this.state.isFilmListVisible &&
                    this.state.films.map(film => <DisplayFilm key={film.id} film={film} />)
                }
                {this.state.isPeopleListVisible &&
                    this.state.people.map(person => <DisplayPerson key={person.id} person={person} />)
                }
            </div >
        )
    }
}

export default App;