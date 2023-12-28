import React, { Component } from "react";
import CardArray from './CardArray';
import Search from "./Search";
import Scroll from "./Scroll";
import './App.css';


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
        let filterbots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
        });

        if(this.state.robots.length === 0) { return <h1 className="loader">Loading....</h1> }
        else return(
            <>
                <div className="head">
                    <h1>Pretty Cats</h1>
                    <Search onSearch={this.onSearching} />
                </div>
                <Scroll>
                    <div className='Containers'>
                        <CardArray robots={ filterbots } />
                    </div>
                </Scroll>
            </>
        );
    }
}

export default App;