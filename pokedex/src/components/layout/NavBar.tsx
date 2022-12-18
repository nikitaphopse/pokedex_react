import React from "react";

const navBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a
          href="/#"
          className="navbar-brand col-sm-4 col-md-2 mr-0 align-items-center mx-auto"
        >
          {" "}
          Pokedex (Build with React)
        </a>
      </nav>
    </div>
  );
};

export default navBar;
