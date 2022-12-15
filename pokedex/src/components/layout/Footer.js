import React, { Component } from 'react';
import "./styles.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a className="mhq" target="_blank" href="https://github.com/nikitaphopse">Nikita Phopse</a>
      </div>
    </footer>
  );
};

export default Footer;