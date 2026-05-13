import React from "react";
import PlantCard from "./PlantCard";

// Renders a list of PlantCard components from the plants prop
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
