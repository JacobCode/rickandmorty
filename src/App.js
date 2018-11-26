import React, { Component } from 'react';
import axios from 'axios';

// SCSS
import './App.scss';

// Components
import Card from './components/Card';

var api = 'https://rickandmortyapi.com/api/character';

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      data: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // API call
    axios.get(api)
    .then(result => this.setState({
      data: result.data.results,
      isLoading: false
    }))
  }

  render() {
    const {
       data,
      isLoading
    } = this.state;

    // While loading
    if (isLoading) {
      return <h1> Loading... </h1>;
    } else {
      // Done loading
      return (
        <div className="App">
          <div className="cards">
            <Card image={data[0].image} name={data[0].name} species={data[0].species} gender={data[0].gender} status={data[0].status} location={data[0].location.name}/>
            <Card image={data[1].image} name={data[1].name} species={data[1].species} gender={data[1].gender} status={data[1].status} location={data[1].location.name}/>
            <Card image={data[2].image} name={data[2].name} species={data[2].species} gender={data[2].gender} status={data[2].status} location={data[2].location.name}/>
          </div>
        </div>
      );
    }
    
  }
}

export default App;
