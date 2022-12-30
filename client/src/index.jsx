import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx'
import GroceryList from './components/GroceryList.jsx'
import groceryList from '../../database/data.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList.groceryList,
    };
    this.maxIDValue = Math.max(...this.state.list.map(currentItem => currentItem.id))
  }

  clickHandler(event) {
    const addItem = document.getElementById('groceryItem').value.toString().toLowerCase();
    const addQuantity = Number(document.getElementById('groceryQuantity').value);
    for (var currentItem of this.state.list) {
      if (currentItem.description === addItem) {
        currentItem.quantity += addQuantity;
        this.setState(this.state.list);
        console.log(this.state.list);
        return;
      }
    }
      this.maxIDValue++;
      this.state.list.push({id: this.maxIDValue, quantity: addQuantity, description: addItem});
      this.setState(this.state.list);
      console.log(this.state.list);
  }

  sortByItem() {
    this.state.list.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
    this.setState(this.state.list);
    console.log(this.state.list);
  }

  sortByQuantity() {
    this.state.list.sort((a,b) => (a.quantity > b.quantity) ? 1 : ((b.quantity > a.quantity) ? -1 : 0))
    this.setState(this.state.list);
    console.log(this.state.list);
  }

  render () {
    return (
      <div>
        <header>
          <button type="button" onClick={this.sortByItem.bind(this)}>Sort By Item</button>
          <button type="button" onClick={this.sortByQuantity.bind(this)}>Sort By Quantity</button>
        </header>
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