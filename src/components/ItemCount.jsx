import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  function handlePlus() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <Card id="contenedor" className="text-center">
      <Card.Body>
        <Card.Title>Disponibles {stock}</Card.Title>
        <div id="botones">
          <Button id="boton-" variant="primary" onClick={() => handleMinus()}>-</Button>
          <Card.Text>
            <input readOnly value={count}></input>
          </Card.Text>
          <Button id="boton+" variant="primary" onClick={() => handlePlus()}>+</Button>
        </div>
        <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
      </Card.Body>
    </Card>
  )
}


export default ItemCount;