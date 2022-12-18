import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

function withParams(Component: any) {
  return (props: any) => <Component {...props} params={useParams()} />;
}

function Pokemon(props: any) {
  const [state, setState] = useState({
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [] as any[],
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
    },
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    async function fetchData() {
      let { pokemonIndex } = props.params;

      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
      const res = await Axios.get(pokemonUrl);

      const name = res.data.name;
      const imageUrl = res.data.sprites.front_default;
      const height = Math.round(res.data.height * 10);
      const weight = Math.round(res.data.weight * 0.1);

      const types = res.data.types.map((type: any) => type.type.name);

      let hp = "";
      let attack = "";
      let defense = "";
      let speed = "";
      res.data.stats.forEach((stat: any) => {
        switch (stat.stat.name) {
          case "hp":
            hp = stat["base_stat"];
            break;
          case "attack":
            attack = stat["base_stat"];
            break;
          case "defense":
            defense = stat["base_stat"];
            break;
          case "speed":
            speed = stat["base_stat"];
            break;
          default:
            break;
        }
      });

      setState({
        name,
        pokemonIndex,
        imageUrl,
        types,
        stats: {
          hp,
          attack,
          defense,
          speed,
        },
        height,
        weight,
      });
    }

    fetchData();
  });

  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-5">
              <h5>{state.pokemonIndex}</h5>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="row align-items-center">
            <div className=" col-md-3 ">
              <img
                src={state.imageUrl}
                className="card-img-top rounded mx-auto mt-2"
                alt=""
              />
            </div>

            <div className="col-md-9">
              <h4 className="mx-auto">
                {state.name
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h4>
            </div>
          </div>
        </div>

        <hr />
        <div className="card-body">
          <div className="row align-items-center">
            <div className="mx-auto">
              <div className="row">
                <div className="col-6">
                  <h6 className="float-right">Type:</h6>
                </div>
                <div className="col-6">
                  {state.types.map((type) => (
                    <h6 key={type} className="float-left">
                      {type
                        .toLowerCase()
                        .split(" ")
                        .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </h6>
                  ))}
                </div>

                <div className="col-6">
                  <h6 className="float-right">HP:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.stats.hp}</h6>
                </div>

                <div className="col-6">
                  <h6 className="float-right">Attack:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.stats.attack}</h6>
                </div>

                <div className="col-6">
                  <h6 className="float-right">Defense:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.stats.defense}</h6>
                </div>

                <div className="col-6">
                  <h6 className="float-right">Speed:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.stats.speed}</h6>
                </div>

                <div className="col-6">
                  <h6 className="float-right">Height:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.height} cm</h6>
                </div>

                <div className="col-6">
                  <h6 className="float-right">Weight:</h6>
                </div>
                <div className="col-6">
                  <h6 className="float-left">{state.weight} Kg</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withParams(Pokemon);
