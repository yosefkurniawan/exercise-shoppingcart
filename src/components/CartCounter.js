import {useState} from 'react'
import ShoppingCart from './ShoppingCart';
import { useSelector } from 'react-redux';

export default function CartCounter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    const cart = useSelector((state) => state.cart);

    return (
        <div className="cart-counter-container">
          <div className="cart-counter" onClick={toggleCart}>
            🛒
            <span className="cart-count">{cart.length}</span>
          </div>
          {isOpen && (
            <div className="cart-popup">
              <ShoppingCart />
            </div>
          )}
        </div>
      );
}
