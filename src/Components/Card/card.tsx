import React, { Component } from "react";

class Card extends Component {

    state = {
      text: "Este es el texto de la tarjeta",
    };
  
    render() {
      return (
        <>
          <div className="bg-red-100 container max-w-md m-2 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-3"></div>
        </>
      );
    }
  }
  
  export default Card;