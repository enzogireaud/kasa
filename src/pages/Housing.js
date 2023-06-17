import React from "react";
import { useLocation } from "react-router-dom";
import logements from "../db/db.json";
import NotFound from "./NotFound";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

const Housing = () => {
  const location = useLocation();
  const logementId = location.pathname.split("/")[2];
  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    return <NotFound />;
  }
  const renderStars = () => {
    const stars = [];
    const filledStars = Math.floor(logement.rating);

    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="star filled"></span>);
    }

    for (let i = filledStars; i < 5; i++) {
      stars.push(<span key={i} className="star"></span>);
    }

    return stars;
  };

  return (
    <div className="logement-container">
      <Navigation />
      <Slideshow logement={logement} />
      <div className="logement">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <ul className="logement-tags">
          {logement.tags.map((tags, index) => (
            <li key={index}>{tags}</li>
          ))}
        </ul>
        {/* Insérer ici le rating*/}
        <div className="rating-host-container">
          <div className="rate">{renderStars()}</div>
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name}></img>
          </div>
        </div>
      </div>
      <div className="collapse-container">
        <Collapse title={"Description"} description={logement.description} />
        <Collapse title={"Equipements"} equipements={logement.equipments} />
      </div>
      <Footer />
    </div>
  );
};

export default Housing;
