import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <Banner imageUrl={"/assets/img/banner1.png"} color={""} />
      <Collapse
        title={"Fiabilité"}
        description={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }
      />
      <Collapse
        title={"Respect"}
        description={
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
        }
      />
      <Collapse
        title={"Service"}
        description={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }
      />
      <Collapse
        title={"Sécurité"}
        description={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }
      />
      <Footer />
    </div>
  );
};

export default About;
