import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    // tiene que ser state, es una propiedad de react
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };

    // Para decirle que se enlace a este componente
    // Esto es cuando hagamos algo con el state, por ejm mostrarlo
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Evento para recibir los datos que se introducen en el input
  handleInput(e){
    // console.log(e.target.value, e.target.name); el valor, el name del input que se modifica
    const { value, name } = e.target;
    // Este evento nos permite alterar los valores de state
    this.setState({ // Cambiamos el dato del inicio
      [name]: value
    });
    console.log(this.state)
  }

  handleSubmit(e){
    // preventDefault evita recargar la página
    e.preventDefault();
    // Acá usamos la propiedad onAddTodo de App.js
    this.props.onAddTodo(this.state);
    console.log('Sending the data..');
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;