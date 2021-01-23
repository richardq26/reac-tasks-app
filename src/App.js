import logo from "./logo.svg";
import React, { Component } from 'react';
import "./App.css";
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import { todos } from './todos.json';
console.log(todos);
class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }
  render(){
    const todosconst= this.state.todos.map((todo,i)=>{
      return(
        <div className="col-md-4 mt-4">
          <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
          </div>
         
        </div>
        </div>
        
      )
    });
    return (
    <div className="App">
      <Navigation titulo="App de tareas con React" tasks={this.state.todos.length}/>
      
      
      <div className="container">
        
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm />
          </div>
          <div className="col-md-8">
            <div className="row">{todosconst}</div>
            
          </div>
           
        </div>
       </div>
      
    </div>

  );
  }
  
}

export default App;
