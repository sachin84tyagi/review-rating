import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(120, 120, 120)" }}
      >
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Sweets Shops
        </NavLink>
        <NavLink to="/signup" className="btn" style={{ color: "white" }}>
          Signup
        </NavLink>
        <NavLink to="/login" className="btn" style={{ color: "white" }}>
          Login
        </NavLink>
        <NavLink to="/contact" className="btn" style={{ color: "white" }}>
          Contact
        </NavLink>
        <NavLink to="/detail" className="btn" style={{ color: "white" }}>
          Detail
        </NavLink>
        {/* <NavLink to="/about" className="btn" style={{ color: "white" }}>
          About
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Header;
