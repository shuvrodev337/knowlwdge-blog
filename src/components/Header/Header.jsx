import React from "react";
import image from '../../images/user-1.png'
const Header = () => {
  return (
    <div >
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-2">Knowledge Blog Everyday</a>
        <div className="d-flex gap-4">
        <button>About Us</button>
        <a href="#myAnswers"> <button>FAQ</button></a>
        <img src={image} alt="writer-image" width="56" height="44" />
        </div>
      </div>
    </nav>
    <hr />
    </div>
  );
};

export default Header;
