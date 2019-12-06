import React, { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactJson from 'react-json-view'
import UserRow from './components/UserRow'



//test data
const testData = [
  { fruitName: "Apple", fruitQuantity: 3 },
  { fruitName: "Pear", fruitQuantity: 2 },
  { fruitName: "Mango", fruitQuantity: 5 },
]

const API = 'https://hn.algolia.com/api/v1/search?query='
const DEFAULT_QUERY = 'redux'




//Arrow notation for the app class
//Why use arrow notations? One reason is that
//the keyword "this" beomes less ambiguous. 
const App = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setData)
    

  }


  useEffect(() => {
    fetchData()
  })

  const dataMapped = testData.map(item => {
    return (
      <UserRow name={item.fruitName} quantity={item.fruitQuantity}/>
    )
  }
  )

  return (
    <div>
      {dataMapped}

    </div>

    )
}

export default App;
