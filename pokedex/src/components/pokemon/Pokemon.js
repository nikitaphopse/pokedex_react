import React, { Component } from 'react';
import Axios from 'axios';
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Pokemon extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: ''
    },
    height: '',
    weight: ''
  };

  async componentDidMount() {
    let { pokemonIndex } = this.props.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const res = await Axios.get(pokemonUrl);

    const name = res.data.name;
    const imageUrl = res.data.sprites.front_default;
    const height = Math.round((res.data.height * 0.328084 + 0.00001) * 100) / 100;
    const weight = Math.round((res.data.weight * 0.220462 + 0.00001) * 100) / 100;

    let { hp, attack, defense, speed} = '';
    res.data.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        default:
          break;
      }
    });
    
    this.setState({
      name,
      pokemonIndex,
      imageUrl,
      stats: {
        hp,
        attack,
        defense,
        speed,
      },
      height,
      weight
    });
  }

  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                
                <h5>{this.state.pokemonIndex}</h5>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row align-items-center">
              <div className=" col-md-3 ">
                <img src={this.state.imageUrl} className="card-img-top rounded mx-auto mt-2" alt=""/>
              </div>

              <div className="col-md-9">
                <h4 className="mx-auto">
                  {this.state.name
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </h4>
              </div>
            </div>
          </div>

          <hr />
          <div className="card-body">
            <div className="row align-items-center">
              <div className="mx-auto">
                <div className="row">

                  <div className="col-6"><h6 className="float-right">HP:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.stats.hp}</h6></div>

                  <div className="col-6"><h6 className="float-right">Attack:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.stats.attack}</h6></div>

                  <div className="col-6"><h6 className="float-right">Defense:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.stats.defense}</h6></div>
                  
                  <div className="col-6"><h6 className="float-right">Speed:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.stats.speed}</h6></div>

                  <div className="col-6"><h6 className="float-right">Height:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.height} ft.</h6></div>

                  <div className="col-6"><h6 className="float-right">Weight:</h6></div>
                  <div className="col-6"><h6 className="float-left">{this.state.weight} lbs</h6></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Pokemon);