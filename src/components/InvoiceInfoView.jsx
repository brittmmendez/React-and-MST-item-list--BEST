import React from 'react';

const InvoiceInfoView = ({invoice}) => (
    <div>
        <h1> Invoicer </h1>
        <h2> Currency: {invoice.currency} </h2> 
    </div>
)

export default InvoiceInfoView;