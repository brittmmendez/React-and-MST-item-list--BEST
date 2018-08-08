import React from 'react';
import { observer } from 'mobx-react'

const TotalView = ({invoice}) => (
    <div>
      {(!invoice.is_paid && invoice.itemList.total > 0) ? 
        <div>
            <h2>Total Is: ${invoice.itemList.total.toFixed(2)} </h2>
            <h2> {invoice.status} </h2>
            <button onClick={invoice.markPaid}> Pay! </button> 
        </div>
        
        :  <h2> {invoice.status} </h2>
      } 
      </div>
)

export default observer(TotalView);