import React from 'react';
import { observer } from 'mobx-react'

const PRODUCTS = [
    {
        name: "Apple",
        price: 7.50
    },{
        name: "Pear",
        price: 8.50
    },{
        name: "Banana",
        price: 6
    }
]

const AllProducts = () => (
    <div>
        <ul>
          {PRODUCTS.map((product, i) => (
            <li key={i}>{product.name} </li>
          ))}
        </ul>

      </div>
)

export default observer(AllProducts);