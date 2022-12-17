import React from "react";

import PokemonList from "../pokemon/PokemonList";

const dashboard = () => {
  return (
    <div className="row">
      <div className="col">
        <PokemonList />
      </div>
    </div>
  );
};

export default dashboard;
