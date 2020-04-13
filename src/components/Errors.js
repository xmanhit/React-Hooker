import React from "react";
import { Link } from 'react-router-dom';
import "../error.css";


const Errors = ({error}) => {
  return (
    <div className="error-page">
      <div className="content">
        <h1 data-h1={ error.number }>{ error.number }</h1>
        <p data-p={ error.text }>{ error.text }</p>
      </div>
      <Link className="back" to="/">GO BACK</Link>
    </div>
  );
}

export default Errors;