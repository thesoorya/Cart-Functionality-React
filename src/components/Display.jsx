import React, { useContext } from "react";
import { cartContext } from "./contexts/CartContext";

const Display = ({ data }) => {
  const { cart, setCart } = useContext(cartContext);

  const container = {
    margin: "10px",
    padding: "10px",
    display: "inline-block",
    width: "200px",
    border: "1px solid #888",
  };

  function add() {
    setCart([...cart, data]);
  }

  return (
    <div style={container}>
      <h3>{data.name}</h3>
      <p>{data.brand}</p>
      <p>{data.year}</p>
      <p>{data.price}</p>
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default Display;