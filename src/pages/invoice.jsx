import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './invoices'

const App = () => (
  <PDFViewer style={{width: "100vw", height: "100vh"}}>
    <MyDocument />
  </PDFViewer>
);

export default App