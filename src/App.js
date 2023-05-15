import axios from 'axios';
import React from 'react';
import './App.css';
import { Component } from 'react';
import Navbar from './Components/Navbar';

class App extends Component {

  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  };

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { advice } = this.state
    return (
      <>
        <Navbar />
        <div className='app'>
          <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>GIVE ME Advice!</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default App;
