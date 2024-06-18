import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../components/contexts/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => {
      return acc + parseInt(curr.price);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  const container = {
    margin: "10px",
    padding: "10px",
    display: "inline-block",
    width: "200px",
    border: "1px solid #888",
  };

  function remove(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>Total: {total}</h1>
      {cart.map((item) => (
        <div style={container} key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.brand}</p>
          <p>{item.year}</p>
          <p>{item.price}</p>
          <button
            onClick={() => remove(item.id)}
            style={{ backgroundColor: "red", color: "white" }}
          >
            REMOVE
          </button>
        </div>
      ))}
    </>
  );
};

export default Cart;