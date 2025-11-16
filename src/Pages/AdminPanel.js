import React, { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import DeleteIcon from "@mui/icons-material/Delete";

function AdminPanel() {
  const context = useContext(DataContext);
  const { cartItem, addItem, deleteItem } = context || {};

 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  

  
  const handleAdd = () => {
    if (!name || !price || !image) return;
    const newItem = { name, price, image };
    addItem(newItem);
    setName("");
    setPrice("");
    setImage("");
  };

  
 

  return (
    <section className="admin-panel">
      <h2>Admin Panel</h2>

      
      <div className="add-form">
       
        <input
          type="text"
          placeholder="Name"
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
        <div className="form-actions">
          <button onClick={handleAdd}>Add Item</button>
        
        </div>
      </div>

      
      <div className="menu-items">
        {cartItem && cartItem.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button
              className="remove-btn"
              onClick={() => deleteItem(item.name)}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminPanel;
