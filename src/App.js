import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paper from './components/Paper';

//test data
const testData = [
  {fruitName: "Apple", fruitQuantity: 3},
  {fruitName: "Pear", fruitQuantity: 2},
  {fruitName: "Mango", fruitQuantity: 5},
]




//Arrow notation for the app class
//Why use arrow notations? One reason is that
//the keyword "this" beomes less ambiguous. 
const App = () => {

  return (
    <div>
      <Header></Header>
      <Paper></Paper>
    </div>
  )

  
}

export default App;
