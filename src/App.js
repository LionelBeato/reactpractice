import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greeting({ name }) {
  return <div>Hi {name}!</div>;
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
        answer: "Yes",
        count: 1
    }
    this.handleClick = this.handleClick.bind(this)


}

handleClick(){
  this.setState((prevState) => {
      return {
          count: prevState.count + 1
      }
  })
}



  render() {
    var names = ['Mike', "Adam", 'Bob']

    return (
      <div className="App">
        <h1>Is State important to know? {this.state.answer}</h1>
        <ul>
          {names.map (function (name){
          return <li>{name}</li>
          })}
        </ul>
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
