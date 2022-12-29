import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx'
import GroceryList from './components/GroceryList.jsx'
import groceryList from '../../database/data.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList.groceryList
    }

  }

  clickHandler(event) {
    const addItem = document.getElementById('groceryItem').value.toString().toLowerCase();
    const addQuantity = Number(document.getElementById('groceryQuantity').value);
    for (var currentItem of this.state.list) {
      if (currentItem.description === addItem) {
        currentItem.quantity += addQuantity;
        this.setState(this.state.list);
        return;
      }
    }
      var newIDValue = this.state.list[this.state.list.length-1].id
      this.state.list.push({id: newIDValue + 1, quantity: addQuantity, description: addItem})
      this.setState(this.state.list);
  }



  render () {
    return (
      <div>
        <div className = "addGrocery">
          <AddGrocery data={this.state.list} handleClick={this.clickHandler.bind(this)}/>
        </div>
        <div className ="groceryList">
          <GroceryList data={this.state.list}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));