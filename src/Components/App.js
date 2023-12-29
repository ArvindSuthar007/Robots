import React, { Component } from "react";
import CardArray from './CardArray';
import Search from "../Add-on/Search";
import Scroll from "../Add-on/Scroll";
import './App.css';
import ErrorHandler from "../Add-on/ErrorHandler";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchbox: '',
        }
    }

    onSearching = (event) => {
        this.setState({ searchbox: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    render() {
        const { robots, searchbox } = this.state;

        let filterbots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchbox.toLowerCase());
        });

        return !robots.length ?
            <h1 className="loader">Loading....</h1>
            :(
                <>
                    <div className="head">
                        <h1>Pretty Cats</h1>
                        <Search onSearch={this.onSearching} />
                    </div>
                    <Scroll>
                        <div className='Containers'>
                            <ErrorHandler>
                                <CardArray robots={ filterbots } />
                            </ErrorHandler>
                        </div>
                    </Scroll>
                </>
            );
    }
}

export default App;