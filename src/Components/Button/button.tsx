import React, { Component } from "react";

class Button extends Component {

  handleClick = () => {
    console.log("El botón ha sido pulsado");
  };

  render() {
    return (
      <button onClick={this.handleClick}
      className="w-full rounded-xl px-5 py-3 text-sm font-medium">
        texto del botón
      </button>
    );
  }
}

export default Button;