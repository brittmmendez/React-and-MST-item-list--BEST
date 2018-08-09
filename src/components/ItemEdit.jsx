import React, { Component } from "react";
import {observer} from "mobx-react"

class ItemEdit extends Component {
    render() {
        const { item } = this.props 
      return (
        <div className="item-edit">
        Name: <input value={item.name} onChange={this.onNameChange} />
        <br/>
        Price: <input value={item.price} onChange={this.onPriceChange} />
        <br/>
        Quantity: <input value={item.quantity} onChange={this.onQuantChange} />
        <br/>
        </div>
      );
    }

    onNameChange = event => {
        this.props.item.changeName(event.target.value)
    }

    onPriceChange = event => {
        const price = parseInt(event.target.value,10)
        if (!isNaN(price)) this.props.item.changePrice(price)
    }

    onQuantChange = event => {
        const quant = parseInt(event.target.value,10)
        if (!isNaN(quant)) this.props.item.changeQuantity(quant)
    }
    
  }
  
  export default observer(ItemEdit);