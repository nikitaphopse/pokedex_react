import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
	<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
	  <a href="" className="navbar-brand col-sm-4 col-md-2 mr-0 align-items-center mx-auto"> Pokedex (build with React)</a>
	</nav>
      </div>
    );
  }
}

