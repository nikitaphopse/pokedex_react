import React, { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";
import Loading from "../layout/Loading";
import axios from "axios";

export default function PokemonList() {
  const [search, setSearch] = useState(``);
  const [state, setState] = useState({
    url: "https://pokeapi.co/api/v2/pokemon/?limit=100",
    pokemon: null,
  });

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(state.url);
      setState({ pokemon: res.data["results"] });
    }

    fetchData();
  });

  return (
    <div>
      <div>
        <input
          type="text"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <br />
      {state.pokemon ? (
        <div className="row">
          {state.pokemon
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
