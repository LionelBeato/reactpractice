import React from 'react';
import './App.css';
import Head from './header.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//simple greeting function with prop destructuring 
function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}

function Fruit({ name, color, quantity}){
return <div>{name}, {color}, {quantity}</div>
}

class App extends React.Component {


  constructor() {
    super()
    this.state = {
        answer: "Yes",
        count: 1
    }
    //whenever you have an event function you have to bind it
    //to the "this" object because JavaScript is a cartoon language
    //thus, the monstrosity below...
    this.handleClick = this.handleClick.bind(this)
}

handleClick(){
  //this function uses setState to alter a property of the class
  //in this case, the property 
  this.setState((prevState) => {
      return {
          count: prevState.count + 1
      }
  })
}




  render() {
    var names = ['Mike', "Adam", 'Bob']


    return (
      <div>
        <Head></Head>
        <h1>Is State important to know? {this.state.answer}</h1>
        <ul>
          {names.map (function (name){
          return <li>{name}</li>
          })}
        </ul>
        <Fruit name="apple" color="red" quantity="3"></Fruit>
        <Greeting  name="bob"></Greeting>

        <h1>{this.state.count}</h1>
        <img onMouseOver={() => console.log("Hovered!")} 
        src="https://www.fillmurray.com/200/100"/>
        <button onClick={this.handleClick} 
        onMouseOver={() => console.log("I was hovered!")}>click me</button>

      </div>
    );
  }
}



export default App;
