import React from "react";

const Banner = ({ imageUrl, title, color }) => {
  const bannerStyle = {
    background: `${color} url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const titleStyle = {
    whiteSpace: "pre-line",
  };
  return (
    <div className="banner" style={bannerStyle}>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
};

export default Banner;
