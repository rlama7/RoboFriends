import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";


class App extends Component {
  // state
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    })

    // if takes too long to fetch then response with loading message
    if (this.state.robots.length === 0) {
      return <h1>Loading ...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2"> RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
