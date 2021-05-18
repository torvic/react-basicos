import React, { Component } from 'react';

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  };

  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log("Restar");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  

  render() {
    return(
      <div>
        <h2>Eventos en Componente de Clase</h2>
        <nav>
          <button onClick={this.sumar}> + </button>
          <button onClick={this.restar}> - </button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}