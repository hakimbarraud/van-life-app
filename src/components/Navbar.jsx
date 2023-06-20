import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="flex justify-between items-center p-4">
      <Link
        to="/"
        className="font-bold text-2xl hover:font-bold hover:underline"
      >
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="host"
          className="mx-4 text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="vans"
          className="text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="about"
          className="ml-4 text-black font-medium hover:font-bold hover:underline"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
