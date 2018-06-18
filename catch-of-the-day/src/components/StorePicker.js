import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();



  // a 'construtor' method runs before teh component is created
  // constructor() {
  //   super();      // runs the thing we are extending first, needed in a constructor
  //   this.goToStore = this.goToStore.bind(this);   // allows 'this' to be used in goToStore
  // }

  // goToStore(event) {      // 'event' argument not needed if we didn't use preventDefault();
  // use the syntax used one line below, or use a constructer commented out above
  goToStore = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get the text from that input
    console.log(this);
    // 3. change the page to /store/whatever-they-entered
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input 
          type="text" 
          ref={this.myInput}
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
        />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;