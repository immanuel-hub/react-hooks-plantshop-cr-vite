import React, { useState } from "react";

// Displays individual plant info with an in-stock/sold-out toggle
function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
