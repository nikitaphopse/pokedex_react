import React, { useEffect, useState } from 'react';

import PokemonCard from './PokemonCard';
import Loading from '../layout/Loading';
import axios from 'axios';

// export default class PokemonList extends Component {
//   state = {
//     url: 'https://pokeapi.co/api/v2/pokemon/?limit=100',
//     pokemon: null
//   };

//   async componentDidMount() {
//     const res = await axios.get(this.state.url);
//     this.setState({ pokemon: res.data['results'] });
//   }

//   handleInputChange = (event) => {
//     const value = event.target.value;
//     this.setState({ searchValue: value });
//     this.filterPokemon(value);
//   };

//   filterPokemon = (userSearch) => {
//     const allPokemon = [...this.state.pokemon];
//     this.setState({
//       pokemon: allPokemon.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(userSearch.toLowerCase())
//       )
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>
//         <input
//           type="text"
//           size={100}
//           value={this.state.searchValue}
//           onChange={this.handleInputChange}
//         />
//         </div>
//         <br/>
//         {this.state.pokemon ? (
//           <div className="row">
//             {this.state.pokemon.map(pokemon => (
//               <PokemonCard
//                 key={pokemon.name}
//                 name={pokemon.name}
//                 url={pokemon.url}
//               />
//             ))}
//           </div>
//         ) : (
//           <Loading />
//         )}
//       </div>
//     );
//   }
// }





//////////////////////////////////////////////////////////////////////////

export default function PokemonList(props) {
  const [state, setState] = useState({
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=10',
    pokemon: null
  })

  useEffect = (async () => {
    const res = await axios.get(state.url);
    console.error('#######################', res);
    setState(...res.data['results'] );
  });

  // handleInputChange = (event) => {
  //   const value = event.target.value;
  //   setState({ searchValue: value });
  //   filterPokemon(value);
  // };

  // filterPokemon = (userSearch) => {
  //   const allPokemon = [...state.pokemon];
  //   setState({
  //     pokemon: allPokemon.filter((pokemon) =>
  //       pokemon.name.toLowerCase().includes(userSearch.toLowerCase())
  //     )
  //   });
  // };

  return (
    <div>
      {/* <div>
        <input
          type="text"
          size={100}
          value={state.searchValue}
        // onChange={handleInputChange()}
        />
      </div> */}
      <br />
      {state.pokemon ? (
        <div className="row">
          {state.pokemon.map(pokemon => (
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

