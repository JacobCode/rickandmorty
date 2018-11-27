import React, { Component } from 'react';
import axios from 'axios';

// SCSS
import './App.scss';

// Components
import Header from './components/Header';
import CardList from './components/CardList';
import Episodes from './components/Episodes'
import Footer from './components/Footer';

// Random number
var randomNum = Math.floor(Math.random() * 26);

// Different pages containing characters (default page: 1)
var url = 'https://rickandmortyapi.com/api/character/?page=' + randomNum;

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {
      url: url,
      data: [],
      isLoading: true,
      totalCharacters: 0,
      totalLocations: 0,
      totalEpisodes: 0,
      episodeData: null,
      episodeData2: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // API call
    axios.get(this.state.url)
    .then(result => {
      // Retrieve data then get character url
      this.setState({ 
        data: result.data.results,
      });
      return axios.get('https://rickandmortyapi.com/api/character/');
    })
    .then((result) => {
      // Set total location character then get location url
      this.setState({
        totalCharacters: result.data.info.count,
      })
      return axios.get('https://rickandmortyapi.com/api/location/');
    })
    .then((result) => {
      // Set total location number then get episode url page 1
      this.setState({
        totalLocations: result.data.info.count,
      })
      return axios.get('https://rickandmortyapi.com/api/episode/');
    })
    .then(result => {
      // Retrieve data then get character url
      this.setState({
        // Set total episode number then get episode url page 2
        totalEpisodes: result.data.info.count,
        episodeData: result.data.results,
      })
      return axios.get('https://rickandmortyapi.com/api/episode/?page=2');
    })
    .then(result => {
      // Retrieve data then get character url
      this.setState({
        episodeData2: result.data.results,
        isLoading: false
      });
    })
  }

  render() {
    const {
      data,
      isLoading,
      totalCharacters,
      totalLocations,
      totalEpisodes,
      episodeData,
      episodeData2,
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
          <Header />
          <CardList data={data} />
          <Episodes episodeData={episodeData} episodeData2={episodeData2} />
          <Footer totalCharacters={totalCharacters} totalLocations={totalLocations} totalEpisodes={totalEpisodes} />
        </div>
      );
    }
    
  }
}

export default App;
