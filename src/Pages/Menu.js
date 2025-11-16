import React, { useState } from "react";
import { menuItems } from "../data/MenuData";
import DeleteIcon from "@mui/icons-material/Delete";
function Menu() {
  
  const [items, setItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

  const deleteItem = (name, category) => {
    setItems((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.name !== name),
    }));
  };

  return (
    <section className="menu">
      <h2>Our Full Menu</h2>

      <div className="menu-categories">
        <button
          onClick={() => setSelectedCategory("breakfast")}
          className={selectedCategory === "breakfast" ? "active" : ""}
        >
          Breakfast
        </button>
        <button
          onClick={() => setSelectedCategory("dessert")}
          className={selectedCategory === "dessert" ? "active" : ""}
        >
          Dessert
        </button>
        <button
          onClick={() => setSelectedCategory("cold")}
          className={selectedCategory === "cold" ? "active" : ""}
        >
          Cold Drinks
        </button>
        <button
          onClick={() => setSelectedCategory("hot")}
          className={selectedCategory === "hot" ? "active" : ""}
        >
          Hot Drinks
        </button>
      </div>

      <div className="menu-items">
        {items[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="remove-btn" 
            onClick={() => deleteItem(item.name, selectedCategory)}>
             <DeleteIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
