import React, { useState } from "react";
import { menuItems } from "../data/MenuData";
import DeleteIcon from "@mui/icons-material/Delete";

function Menu() {
  const [items, setItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState("breakfast");

 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");


  const deleteItem = (name, category) => {
    setItems((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item.name !== name),
    }));
  };

 
  const addItem = () => {
    if (!name || !price || !image) {
      alert("Please fill in all fields");
      return;
    }

    const exists = items[selectedCategory].some((item) => item.name === name);
    if (exists) {
      alert("This item already exists!");
      return;
    }

    const newItem = { name, price, image };
    setItems((prev) => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], newItem],
    }));

    
    setName("");
    setPrice("");
    setImage("");
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

      
      <div className="add-form">
        <h3>Add New Item to {selectedCategory}</h3>
        <input
          type="text"
          placeholder="Dish name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

     
      <div className="menu-items">
        {items[selectedCategory].map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button
              className="remove-btn"
              onClick={() => deleteItem(item.name, selectedCategory)}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
