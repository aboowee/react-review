import React from 'react';

const GroceryItem = (props) => (
    <div>{props.individualItem.description} : {props.individualItem.quantity}</div>
)

export default GroceryItem;