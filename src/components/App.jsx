import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { observer } from 'mobx-react'
import ItemFormView from './ItemFormView.jsx';
import ItemListView from './ItemListView';
import InvoiceInfoView from './InvoiceInfoView';
import TotalView from './TotalView';

@observer
class App extends Component {
  render() {
    const {invoice} = this.props;
    return (
      <div className="App">
        <DevTools />
        
        <InvoiceInfoView invoice={invoice}/>

        <ItemFormView invoice={invoice}/>

        <ItemListView invoice={invoice}/>

        <TotalView invoice={invoice}/>
      </div>
    );
  }
}

export default App;
