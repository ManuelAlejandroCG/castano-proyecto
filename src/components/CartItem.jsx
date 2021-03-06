import React from 'react'
import { useCartContext } from './store/cart-context'
import './CartItem.css'

const CartItem = ({ item }) => {
  const { remove } = useCartContext();
  const { nombre, quantity, precio, id } = item;

  return (
    <div className='itemEnCart'>
      <h1>{nombre}</h1>
      <div className='cartImgContainer'>
        <img src={item?.imagen} alt="Imagen del producto" />
      </div>
      <h3>Unidades: {quantity}</h3>
      <h3>Precio unitario: ${precio}</h3>
      <button onClick={() => remove(id)}>Quitar de la lista</button>
    </div>
  );
};

export default CartItem