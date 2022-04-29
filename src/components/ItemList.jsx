import React from 'react'
import Item from './Item'

function ItemList({items}) {
  return (
    <div className='contenedorCards'>
        {items.map(item => <Item item={item} key={item.id} />)}
    </div>
  )
}
export default ItemList