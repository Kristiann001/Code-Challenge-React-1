import React from 'react'
import './App.css';
import Header from './component/Header';
import Search from './component/Search';
import Form from './component/Form';
import Table from './component/Table';


function App() {
  
  fetch('http://localhost:3000/')
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <div className="App">
      <Header name = "The Royal Bank of Flatiron" />
      <Search />
      <Form />
      <Table />
    </div>
  );
}

export default App;
