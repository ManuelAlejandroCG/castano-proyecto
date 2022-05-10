import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
 const [cantidadProductos, setCantidadProductos] = useState(null);
 function addHandler(cantidadAgregar){
   setCantidadProductos(cantidadAgregar);
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
          <p>{item?.precio}</p>
          <div className='count-container'>
            {cantidadProductos ?
            <button><Link to='/cart'>Carrito ({cantidadProductos} items)</Link></button> :
            <ItemCount initial={0} stock={item.stock} onAdd={addHandler} />
            } 
          </div>
        </div>
        <Link to={'/'}>
          <button>Volver</button>
        </Link>
        <Link to={'/cart'}>
          <button>Carrito</button>
        </Link>
      </div>
    </div>
  )
}

export default ItemDetail