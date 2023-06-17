import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../db/db.json";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <main>
        <Banner
          imageUrl={"/assets/img/banner.png"}
          title={"Chez vous,\npartout et ailleurs"}
          color={"#00000054"}
        />
        <div className="cards-container">
          {logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
