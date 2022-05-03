import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
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
          <p>{item?.precio}</p>
          <div className='count-container'>
            <ItemCount initial={0} stock={item.stock} onAdd={() => { }} />
          </div>
        </div>
        <Link to={'/'}>
          <button>Volver</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemDetail