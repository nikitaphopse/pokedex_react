import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import spinner from "../layout/spinner.gif";
import Loading from "../layout/Loading";

const Sprite = styled.img`
  width: 8em;
  height: 8em;
  display: none;
`;

const Card = styled.div`
  opacity: 0.9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

type State = {
  name?: string;
  imageUrl?: string;
  pokemonIndex?: string;
  imageLoading?: boolean;
  tooManyRequests?: boolean;
};

export default function PokemonCard(props: any) {
  const initialState: State = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    tooManyRequests: false,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const { name, url } = props;
      const pokemonIndex = url.split("/")[url.split("/").length - 2];
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
      setState({ name, imageUrl, pokemonIndex });
    }

    fetchData();
  });

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <Link to={`pokemon/${state.pokemonIndex}`}>
        <Card className="card">
          <h5 className="card-header">{state.pokemonIndex}</h5>

          {state.imageLoading ? (
            <img
              src={spinner}
              alt=""
              style={{ width: "5em", height: "5em" }}
              className="card-img-top rounded mx-auto d-block mt-2"
            />
          ) : null}

          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={state.imageUrl}
            onLoad={() => setState({ imageLoading: false })}
            onError={() => setState({ tooManyRequests: true })}
            style={
              state.tooManyRequests
                ? { display: "none" }
                : state.imageLoading
                ? null
                : { display: "block" }
            }
          />

          {state.tooManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">
                {" "}
                Too Many Requests
              </span>
            </h6>
          ) : null}

          <div className="card-body mx-auto">
            {state.name ? (
              <h6 className="card-title">
                {state.name
                  .toLowerCase()
                  .split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </h6>
            ) : (
              <Loading />
            )}
          </div>
        </Card>
      </Link>
    </div>
  );
}
