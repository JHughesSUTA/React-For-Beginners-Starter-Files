import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!</h2>
      <AddFishForm addFish={this.props.addFish} />    {/* props because addFish doesn't live on this component */}
      </div>
    );
  }
}

export default Inventory;