import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <div className="card">
      <NavLink
        to={{ pathname: `/logement/${logement.id}`, state: { logement } }}
      >
        <img src={logement.cover} alt={logement.title} />
      </NavLink>
      <h3>{logement.title}</h3>
    </div>
  );
};

export default Card;
