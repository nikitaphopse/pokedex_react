import React, { Component } from 'react';
import spinner from './spinner.gif';

export default class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>
	 Refreshing Pokedex entries ...
	 <img src={spinner} style={{ width: '5em', height: '5em' }} className="card-img-top rounded mx-auto d-block mt-2" />
	</h5>
      </React.Fragment>
    );
  }
}
