import React, { Component } from 'react';
import Tone from 'tone';
import './App.css';
import Chords from './components/chords/Chords';
import Melody from './components/melody/Melody';
import Sample from './components/sample/Sample';
import Nav from './components/nav/Nav'

class App extends Component {

  constructor(){
    super();
    this.state = {
      currentPage: null
    }
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.setState({
      currentPage: page
    })
  }

  componentDidMount() {
    Tone.Transport.start();
  }

  render() {
    let partial;
    if (this.state.currentPage === "SAMPLE") {
      partial = <Sample />
    } else if (this.state.currentPage === "MELODY") {
      partial = <Melody />
    } else {
      partial = <Chords />
    }

    return (
      <div className="App">
        <Nav handleClick={this.setPage}/>
        {partial}
      </div>
    );
  }
}

export default App;
