import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CartContext from './store/cart-context';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
 const cartCtx = useContext(CartContext);

 function addHandler(cantidadAgregar){
   cartCtx.add({quantity: cantidadAgregar, ...item});
  }  
  return (
    <div className='item-detail'>
      <div className='left'>
        <div className='img-detail'>
          <img src={item?.imagen} alt='Imagen del producto' />
        </div>
      </div>
      <div className='right'>
        <div className='info-detail'>
          <h2>{item?.nombre}</h2>
          <p>{item?.detail}</p>
          <p>${item?.precio}</p>
          <div className='count-container'> 
            <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
            <button onClick={()=>cartCtx.remove(item.id)}>Remover</button>
            <button onClick={()=>cartCtx.clear()}>Vaciar Carrito</button>
            {cartCtx.productos.length &&            
                <Link to='/cart'>
                <button>
                
                  Carrito ({cartCtx.cantidad()} items)
                
                </button>
                </Link>
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail