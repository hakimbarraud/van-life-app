import React from "react";
import { useOutletContext } from "react-router-dom";

const VansPrice = () => {
  const [van] = useOutletContext();
  return (
    <div>
      <span className="font-bold text-3xl">${van.price}</span>/day
    </div>
  );
};

export default VansPrice;
