import React from "react";
import LogoImage from "../assets/LogoMakr_652r9s.png" 

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <img
        src={LogoImage}
        width="30"
        height="30"
        className="d-inline-block align-top ImgLogo"
        alt=""
      />
      Birmingham Currents
    </nav>
  );
};

export default Navbar;
