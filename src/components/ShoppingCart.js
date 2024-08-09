import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "../store/cartSlide";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handlePlus = (id) => {
    dispatch(increaseQty(id))
  }
  const handleMin = (id) => {
    dispatch(decreaseQty(id))
  }
  const handleDel = (id) => {
    dispatch(removeFromCart(id))
  }
  const handleClear = (id) => {
    dispatch(clearCart())
  }

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  
  return (
    <div className="shopping-cart-container">
      <h4>My Shopping Cart</h4>
      {cart.length !== 0 ? (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="img-wrapper"><img src={product.image}/></div>
            <div className="cart-detail">
                <p><strong>{product.title}</strong></p>
                <p>Price: ${product.price}</p>
                <div>Qty: 
                    <button className="cart-item-controls" onClick={() => handlePlus(product.id)}>+</button>
                    <span className='qty'>{product.quantity}</span>
                    <button className="cart-item-controls" onClick={() => handleMin(product.id)}>-</button>
                </div>
                <button className="remove-item-button" onClick={() => handleDel(product.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {cart.length !== 0 && (
        <>
            <p><strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
            <button className="clear-cart-button danger" onClick={() => handleClear()}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
