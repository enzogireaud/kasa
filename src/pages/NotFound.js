import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="notFound">
      <Navigation />
      <div className="notFound-content">
        <h2>404</h2>
        <p>
          Oups! La page que <br></br>vous demandez n'existe pas.
        </p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
