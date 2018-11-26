import React, { Component } from 'react';
import axios from 'axios';

// SCSS
import './App.scss';

// Components
import CardList from './components/CardList';
import PageController from './components/PageController'

// Different pages containing characters (default page: 1)
var url = 'https://rickandmortyapi.com/api/character/?page=' + 12;

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      url: url,
      info: {},
      data: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // API call
    axios.get(this.state.url)
    .then(result => this.setState({
      info: result.data.info,
      data: result.data.results,
      isLoading: false
    }))
  }

  render() {
    const {
      info,
      data,
      isLoading
    } = this.state;

    // While loading
    if (isLoading) {
      return ( 
        <div className="loading">
          <div className="gif">

          </div>
        </div>
      );
    } else {
      // Done loading
      return (
        <div className="App">
          <CardList data={data} />
          <PageController info={info} />
        </div>
      );
    }
    
  }
}

export default App;
