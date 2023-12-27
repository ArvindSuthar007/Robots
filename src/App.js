import React, { Component } from "react";
import CardArray from './CardArray';
import Search from "./Search";
import './App.css';
import { robots } from "./robots";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchbox: '',
        }
    }
    
    onSearching = (event) => {
        this.setState({ searchbox: event.target.value });
    }
    
    render() {
        let filterbots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchbox.toLowerCase());
        });

        return(
            <>
                <div className="head">
                    <h1>Pretty Cats</h1>
                    <Search onSearch={this.onSearching} />
                </div>
                <div className='Containers'>
                    <CardArray robots={ filterbots } />
                </div>
            </>
        );
    }
}

export default App;