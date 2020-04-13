import React from "react";
import "../error.css";

const Errors = ({error}) => {
  return (
    <div className="error-page">
      <div>
        <h1 data-h1={ error.number }>{ error.number }</h1>
        <p data-p={ error.text }>{ error.text }</p>
      </div>
    </div>
  );
}

export default Errors;