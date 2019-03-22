import React, { Component } from 'react';
import '../App.css';
import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 id="title">U.S. GDP</h1>
        </header>
          <div>
              <Chart />
          </div>
      </div>
    );
  }
}

export default App;
