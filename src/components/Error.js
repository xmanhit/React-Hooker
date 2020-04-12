import React from "react";
import "../error.css";

const Error = ({error}) => {
  return (
    <div className="error-page">
      <div>
        <h1 data-h1={error.number}>{error.number}</h1>
          <p data-p={error.name}>{error.name}</p>
      </div>
    </div>
  );
}

export default Error;