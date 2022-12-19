import React, { useEffect, useState } from "react";

import PokemonCard from "./PokemonCard";
import Loading from "../layout/Loading";
import axios from "axios";

type State = {
  pokemon?: any;
  url?: string;
};

export default function PokemonList() {
  const initialState: State = {
    url: "https://pokeapi.co/api/v2/pokemon/?limit=100",
    pokemon: [],
  }
  const [search, setSearch] = useState(``);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      let res: any;
      if (state.url) {
        res = await axios.get(state.url);
      }
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
          onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
          placeholder="Search..."
        />
      </div>
      <br />
      {state.pokemon ? (
        <div className="row">
          {state.pokemon
            .filter((pokemon: any) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon: any) => (
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
