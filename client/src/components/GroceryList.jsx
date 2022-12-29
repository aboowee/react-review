import React from 'react';
import App from '../index.jsx'
import GroceryItem from '../components/GroceryItem.jsx'

const GroceryList = (props) => (
  <div className="groceries">
    {props.data.map((item) => (
      <GroceryItem key={item.id} individualItem={item}/>
    ))}
  </div>
)

export default GroceryList;