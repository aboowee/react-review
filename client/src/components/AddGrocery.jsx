import React from 'react';
import App from '../index.jsx';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick;
  }

  render () {
    return (
      <div>
        <form className = 'newGrocery'>
          <div>Description:  <input type="text" id="groceryItem"></input>
          </div>
          <div>Quantity:  <input type="text" id="groceryQuantity"></input>
          <button type="button" onClick={()=>{this.handleClick(event)}}>Add Grocery</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddGrocery;

