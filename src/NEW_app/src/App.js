import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import ItemCard from "./Contact.js";

class App extends React.Component{
  state = {
      todos:[],
  }
  componentDidMount(){
     fetch("http://localhost:3000/todos.json")
     .then(r=>r.json())
     .then(data=>this.setState({todos:data}))
     
  }
  render(){
  return(
    <React.Fragment>
      dsdsd!!!!
    </React.Fragment>
  )
  }
  
}


export default App;