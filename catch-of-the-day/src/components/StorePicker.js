import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();

  // use the syntax used one line below, or use a constructer commented out above
  goToStore = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;    // tutorial used this.myInput.value.value ...
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
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