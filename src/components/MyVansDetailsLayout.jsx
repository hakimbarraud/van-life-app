import React from "react";
import { NavLink } from "react-router-dom";

const MyVansDetailsLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <nav className="my-4">
      <NavLink
        to="."
        className="mr-4 text-black font-medium hover:font-bold hover:underline"
        style={({ isActive }) => (isActive ? activeStyles : null)}
        end
      >
        Details
      </NavLink>
      <NavLink
        to="price"
        className="text-black font-medium hover:font-bold hover:underline"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Price
      </NavLink>
      <NavLink
        to="photos"
        className="ml-4 text-black font-medium hover:font-bold hover:underline"
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default MyVansDetailsLayout;
