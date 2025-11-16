import { useState } from "react";
import DataContext from "./DataContext";
import MenuItems from "./MenuData";

function DataProvider({ children}){
const [cartItem, setCartItem] = useState([MenuItems]);

const addItem = (item) => {
    setCartItem((prev) => [...prev, item]);
  };


const deleteItem = (name) => {
  setCartItem((prev) =>
    prev.filter((item) => item.name !== name)
  );
};

const updateItem = (updatedItem) => {
  setCartItem((prev) =>
    prev.map((item) => (item.name === updatedItem.name ? updatedItem : item))
  );
};

return (
    <DataContext.Provider value={{cartItem,addItem,updateItem,deleteItem}}>
       {children}
    </DataContext.Provider>
);

}
export default DataProvider;