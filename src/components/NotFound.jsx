import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="p-4">
      <h2 className="text-3xl font-bold">
        Sorry, the page you were looking for was not found!
      </h2>
      <Link
        to="/"
        className="bg-black text-white inline-block w-full text-center p-3 rounded-lg font-bold mt-4 hover:scale-105 hover:drop-shadow-xl duration-300"
      >
        Return to the home page
      </Link>
    </section>
  );
};

export default NotFound;
