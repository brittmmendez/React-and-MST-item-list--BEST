import React, { Component } from 'react';
import { observer } from 'mobx-react'
import ItemEdit from "./ItemEdit"
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"

class ItemView extends Component {
    constructor() {
        super()
        this.state = {
            isEditing: false,
        }
    }
    render() {
        const {item} = this.props
      return this.state.isEditing ? (
              this.renderEditable()
            ) : (
                <li> <strong> {item.name}: ${item.total.toFixed(2)} </strong> <br/>
                <button onClick={item.increment}> + </button>
                {item.quantity > 1 ?  <button onClick={item.decrement}> - </button> : null}
                <button onClick={this.onToggleEdit}> Edit </button>
                <button onClick={item.remove}> x </button>
                <ul> 
                    <li> Price: ${item.price.toFixed(2)} </li>
                    <li> Quantity: {item.quantity} </li>
                </ul>
                <span> 
                    </span>
            </li>
      )
    }

    renderEditable () {
        return (
            <li className="item" >
                <ItemEdit item={this.state.clone} />
                <button onClick={this.onSaveEdit}> Save </button>
                <button onClick={this.onCanceleEdit}> Cancel </button>
            </li>
        )
    }

    onToggleEdit = () => {
        this.setState({ 
            isEditing: !this.state.isEditing,
        clone: clone(this.props.item) })
    }

    onCanceleEdit = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    onSaveEdit = () => {
        const itemToSave = getSnapshot(this.state.clone)
        applySnapshot(this.props.item, itemToSave)
        this.setState({ 
            isEditing: !this.state.isEditing,
        clone: null })
    }
    
}
export default observer(ItemView);