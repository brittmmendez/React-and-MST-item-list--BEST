import React from 'react';

const ItemFormView = ({invoice}) => (
  <form onSubmit={e => {
    e.preventDefault();
    invoice.itemList.add({
      name: this.nameInput.value,
      quantity: parseInt(this.quantityInput.value, 10),
      price: parseFloat(this.priceInput.value),
    })
    e.target.reset();
    this.nameInput.focus()

  }}>
    <h3> Add Item </h3>
    <label htmlFor="name">
      Name:
      <input type="text" 
      ref={input => (this.nameInput = input)} 
      id="name"
      placeholder="Item Name" />
    </label> <br/>
    <label htmlFor="quantity">
      Quantity:
      <input type="number" 
      min="1" 
      defaultValue={1} 
      ref={input => (this.quantityInput = input)} 
      id="quantity" />
    </label> <br/>
    <label htmlFor="price">
      Price:
      <input type="string" 
      min="1" 
      defaultValue={1.00} 
      step="0.01" 
      ref={input => (this.priceInput = input)} 
      id="price" />
    </label> <br/>
    <button type="submit"> Add Item </button> 
  </form>
)

export default ItemFormView;