import React from 'react'
import './App.css';
import Header from './component/Header';
import Form from './component/Form';
import Table from './component/Table';


function App() {

  
  return (
    <div className="App">
      <Header name = "The Royal Bank of Flatiron" />
      <Form />
      <Table />
    </div>
  );
}

export default App;
