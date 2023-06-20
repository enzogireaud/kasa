import React, { useState } from "react";

const Collapse = ({ title, description, equipements }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const chevronStyle = {
    content: '""',
    display: "inline-block",
    marginLeft: "5px",
    fontSize: "3em",
    transition: "transform 0.5s ease",
    transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
  };

  return (
    <div className="collapse">
      <h3 style={{ zIndex: "10" }}>{title}</h3>
      <span onClick={handleToggle} style={chevronStyle}>
        {"‹"}
      </span>
      <div
        className={isOpen ? "collapse-content open" : "collapse-content close"}
      >
        {description ? (
          <p>{description}</p>
        ) : (
          equipements &&
          equipements.length > 0 && (
            <ul>
              {equipements.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
};

export default Collapse;
