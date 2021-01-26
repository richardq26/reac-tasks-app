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
    this.handleAddTodo = this.handleAddTodo.bind(this);
   
  }
  
  // Manejador de agregar tareas
  handleAddTodo(todo){
    // Actualizamos el estado de las tareas
    this.setState({
      // Agrego nueva tarea al arreglo de tarea, agrego todo a todos
      // Los spread(...) sirven para que solo devuelva argumentos del array,
      // en este caso como usamos [] tenemos que usar el spread para que adentro solo tenga argumentos
      todos:[...this.state.todos, todo]
    })
  }
  // Eliminar tarea
  removeTodo(index){
    // Le agregamos el window para que react sepa que es un evento propio del navegador
    if(window.confirm('Seguro de querer eliminar?')){
      // Filter recorre todo y si el dato no cumple la condición lo elimina
      this.setState({todos: this.state.todos.filter((e,i)=>{
        // Si el indice no es igual al que le paso, se queda, sino se elimina
        return i !== index;
      })
    });
    } 
  }
  render(){
    const todosconst= this.state.todos.map((todo,i)=>{
      return(
        <div className="col-md-4 mt-4" key={i}>
          <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge badge-pill badge-danger ml-2">{todo.priority}</span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <p><mark>{todo.responsible}</mark></p>
          </div>
          <div className="card-footer">
            {/* Este se bind se usa aquí para que no se ejecute en el constructor*/ }
            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Eliminar</button>
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
             {/* onAddTodo es un evento que acabos de crear 
             Le estamos dando una nueva propiedad llamada onAddTodo*/}
            <TodoForm onAddTodo={this.handleAddTodo} />
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
