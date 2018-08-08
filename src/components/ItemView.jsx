import React from 'react';
import { observer } from 'mobx-react'

const ItemView = ({item}) => (
    <li> <strong> {item.name}: ${item.total.toFixed(2)} </strong> <br/>
        <button onClick={item.increment}> + </button>
        {item.quantity > 1 ?  <button onClick={item.decrement}> - </button> : null}
        <button onClick={item.remove}> x </button>
        <ul> 
            <li> Price: ${item.price.toFixed(2)} </li>
            <li> Quantity: {item.quantity} </li>
        </ul>
    </li>
)

export default observer(ItemView);