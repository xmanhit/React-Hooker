import React from "react";
import "../error.css";

const Error404 = () => {
  return (
    <div className="error-page">
      <div>
        <h1 data-h1="404">404</h1>
        <p data-p="Page doesn't exist">Page doesn't exist</p>
      </div>
    </div>
  );
}

export default Error404;