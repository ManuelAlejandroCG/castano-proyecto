import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from './store/cart-context';
import './CartWidget.css';


const CartWidget = () => {
  const { productos, itemsTotal } = useCartContext();
  return (
    <div>
      {productos.length > 0 && (
        <>
          <NavLink to="/cart">
            <i className="bi bi-cart"></i>
            <span classname="unidades">{itemsTotal()}</span>
          </NavLink>
        </>
      )}
    </div>

  )
}

export default CartWidget