import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul id="logo-nav">
          <li>
            <img src="/assets/img/k.png" alt="k-logo"></img>
          </li>
          <li>
            <img src="/assets/img/maison.png" alt="maison-logo"></img>
          </li>
          <li>
            <img src="/assets/img/s.png" alt="s-logo"></img>
          </li>
          <li>
            <img src="/assets/img/a.png" alt="a-logo"></img>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/a-propos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
