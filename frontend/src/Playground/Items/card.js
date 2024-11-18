import React, { useEffect, useState } from "react";

function Cards() {
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  useEffect(() => {
    // Fetch data from the backend server
    fetch("https://dummyjson.com/c/5401-b93d-4c81-bd6e")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        // Initialize quantities for each item to 0
        const initialQuantities = {};
        data.forEach((item) => {
          initialQuantities[item._id] = 0; // Ensure `_id` is unique
        });
        setQuantities(initialQuantities);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleIncrement = (_id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [_id]: prevQuantities[_id] + 1, // Increment only the specified product
    }));
  };

  const handleDecrement = (_id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [_id]: Math.max(prevQuantities[_id] - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  return (
    <div className="cons">
      <div className="navitems">
        <input type="text" className="search" placeholder="Search Content" />
      </div>
      {items.map((e) => (
        <div key={e._id} className="cardcontainer">
          <div className={`Quantity ${quantities[e._id] ? "visible" : ""}`}>
            {quantities[e._id]}
          </div>
          <div className="labelProduct">{e.Title}</div>
          <div className="images">
            <img src={e.Image} alt={e.Title} />
          </div>
          <div className="pricecontainer">
            <button onClick={() => handleIncrement(e._id)}>+</button>
            <price>{e.Price}</price>
            <button onClick={() => handleDecrement(e._id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
