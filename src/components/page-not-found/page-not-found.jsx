import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <React.Fragment>
      <h2>This page does not exist</h2>
      <Link to="/">To main page</Link>
    </React.Fragment>
  );
};

export default PageNotFound;
