import React from 'react';
import App from '../index.jsx'
import GroceryItem from '../components/GroceryItem.jsx'

const GroceryList = (props) => {
  return (
    <div className="groceries">
      {props.data.map((item) => {
        if (!item.isCrossed){
        return(
        <GroceryItem key={item.id} individualItem={item} data={props.data}/>
        ) } else {
          return null;
        }
      })}
    </div>
  )
}

export default GroceryList;