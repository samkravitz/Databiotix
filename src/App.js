import React, { Component } from 'react';

import './App.css';
import Video from './Video'

class App extends Component {

  state = {
    photoUrl: ''
  }

  componentDidMount() {
    this.getImage()
  }

  getImage = async () => {
    var outside
    const result = fetch('https://cors-anywhere.herokuapp.com/https://serpapi.com/playground?q=Apple&tbm=isch&ijn=0')
    .then(response => response.blob())
    .then(images => {
      // Then create a local URL for that image and print it 
      outside = URL.createObjectURL(images)
      console.log(outside)
      this.setState({ photoUrl: outside })
  })
   
  }

  render() {
    return (
      <div className="App">
        
        <img src={this.state.photoUrl} alt='cant get image' />
        <Video />
      </div>
    );
  }
}

export default App;
