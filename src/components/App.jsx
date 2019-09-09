import React, { Component } from 'react';
import axios from 'axios';
import { Puzzle } from './Puzzle';

export class App extends Component {
  state = {
    puzzle: null,
  };

  componentDidMount() {
    const { API_PORT } = process.env;
    axios.get(`http://localhost:${API_PORT}/puzzle`)
      .then((response) => {
        this.setState({ puzzle: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.puzzle) {
      return <div>loading ...</div>;
    }
    return <Puzzle puzzle={this.state.puzzle} />;
  }
}