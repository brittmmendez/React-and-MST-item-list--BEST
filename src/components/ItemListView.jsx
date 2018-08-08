import React, { Component } from 'react';
import ItemView from './ItemView';
import { observer } from 'mobx-react'

@observer
class ItemListView extends Component {
  render() {
    const {invoice} = this.props;
    return (
      <div>
        <ol>
          {invoice.itemList.items.map((item, i) => (
            <ItemView key={i} item={item}/>
          ))}
        </ol>

      </div>
    )
  }
}

export default ItemListView;