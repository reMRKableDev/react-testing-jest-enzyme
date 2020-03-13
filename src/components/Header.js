import React from "react";

const Header = ({ name }) => {
  return name ? <h1>Hello {name}!</h1> : <h1>Hello stranger!</h1>;
};

export default Header;
