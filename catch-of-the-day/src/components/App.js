import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
          <Order />
          <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;