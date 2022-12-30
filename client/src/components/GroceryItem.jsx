import React from 'react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.item = props.individualItem
    this.item.isCrossed = false;
    this.state = {
        isCrossed: false
    }
    this.data = props.data;
  }

  handleItemClick(event) {
    this.setState({isCrossed: !this.state.isCrossed});
    this.item.isCrossed = true;
  }

  render() {
    const style = {textDecoration: this.state.isCrossed ? 'line-through' : 'none'}
    return (
      <div style={style} onClick={this.handleItemClick.bind(this)}>{this.item.description} : {this.item.quantity}</div>
    )
  }
}

export default GroceryItem;