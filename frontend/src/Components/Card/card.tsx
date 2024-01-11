import React, { Component } from "react";

interface CardProps {
  children: React.ReactNode;
}

class Card extends Component<CardProps> {  
    render() {
      return (
        <>
          <div className="container max-w-md m-2 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-3">
            {this.props.children}
          </div>
        </>
      );
    }
  }
  
  export default Card;