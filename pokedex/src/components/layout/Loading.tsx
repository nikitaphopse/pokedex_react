import React from "react";
import spinner from "./spinner.gif";

const loading = () => {
  return (
    <h5>
      Refreshing Pokedex entries ...
      <img 
        src={spinner}
        alt="" 
        style={{ width: '5em', height: '5em' }} 
        className="card-img-top rounded mx-auto d-block mt-2" 
      />
    </h5>
  );
}

export default loading;