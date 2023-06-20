import React from "react";
import { useOutletContext } from "react-router-dom";

const VansInfos = () => {
  const [van] = useOutletContext();
  
  return (
    <section>
      <p className="mb-3">
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p className="mb-3">
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      <p className="mb-3">
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>Public
      </p>
    </section>
  );
};

export default VansInfos;
