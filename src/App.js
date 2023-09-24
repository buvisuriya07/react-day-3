import "./App.css";
import Home from "./Components/Home";
import { useState } from "react";
import Cart from "./Components/Cart";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import productdata from "./Data/data";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const getData = productdata.filter((inp) => inp.id === item);
    setCartItems([...cartItems, ...getData]);
  };

  const removeItem = (item) => {
    console.log("remove item", item);
    const filteredData = cartItems.filter((obj) => obj.id !== item);
    console.log(filteredData);
    setCartItems([...filteredData]);
  };
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <h1>Task: Shopping Cart</h1>
      </div>
      <div className="container d-flex align-items-center justify-content-center">
        <h5 className="bg-info text-dark">
          Description: Task – * The rating according to value given * Disable
          add to cart button when added to card * Remove item from cart & enable
          add to cart https://startbootstrap.com/previews/shop-homepage
        </h5>
      </div>
      <Navigation cartItems={cartItems} />
      <Header />
      <Cart cartItems={cartItems} removeItem={removeItem} />
      <Home productdata={productdata} addItem={addItem} cartItems={cartItems} />
    </>
  );
}

export default App;
