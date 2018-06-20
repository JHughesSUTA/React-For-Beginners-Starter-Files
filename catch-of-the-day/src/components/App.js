import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. set the new fishes object to state
    this.setState({
      fishes: fishes  // I can just put 'fishes', and it would be the same as 'fishes: fishes' in ES6
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}    {/*Object.keys gives us the keys of the object as an array so we can loop over*/}
          </ul>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;