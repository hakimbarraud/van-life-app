import React from "react";
import { useOutletContext } from "react-router-dom";

const VansPhotos = () => {
  const [van] = useOutletContext();
  return <img src={van.imageUrl} alt={van.name} className="w-1/4 rounded-md inline-block" />;
};

export default VansPhotos;
