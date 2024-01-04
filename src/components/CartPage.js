import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { clearCart } from "../actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    dispatch(clearCart());

    setCheckoutSuccess(true);
    alert("Checked Out Successfully");
  };

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  // Calculate individual item costs
  const itemCosts = cartItems.map((cartItem) => {
    const itemCost = Number(cartItem.price);
    return itemCost;
  });

  const totalCost = itemCosts.reduce((total, itemCost) => total + itemCost, 0);

  return (
    <div>
      <h1 style={{ marginLeft: "48%" }}>My Cart</h1>
      <div className="cart-container">
        <div className="cart-card-container">
          <div className="cart-card">
            {cartItems.map((cartItem, index) => (
              <div
                key={cartItem.id}
                style={{
                  display: "flex",
                  border: "1px solid #ddd",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <div>
                  <img
                    src={cartItem.thumbnail}
                    alt={cartItem.title}
                    style={{
                      width: "110px",
                      height: "100%",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div>
                  <div className="card-title">
                    <h5>{cartItem.title}</h5>
                  </div>
                  <div>
                    <p>Price: ${cartItem.price}</p>
                  </div>
                  <p>Quantity: 1</p>
                  <button
                    className="remove-cart"
                    onClick={() => handleRemoveFromCart(cartItem.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "right" }}>
          {checkoutSuccess ? (
            <div>
              <p>Items have been successfully checked out!</p>
            </div>
          ) : (
            <div className="total-cost">
              <div>
                <h3 style={{ borderBottom: "1px solid white" }}>
                  Check Out Lists
                </h3>
                {itemCosts.map((itemCost, index) => (
                      <div style={{width : "100%",display : "flex", justifyContent : "space-between"}}>
                  <p key={index}>
                    Item {index + 1}:</p>
                     <p>${itemCost}
                  </p>
                  </div>
                ))}
              </div>

              <p style={{ border: "1px solid white", padding: ".25rem" }}>
                Total: ${totalCost}
              </p>

              <button onClick={handleCheckout}>Click to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
