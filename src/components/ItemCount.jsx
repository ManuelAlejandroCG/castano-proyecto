import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount(stock) {
  const [count, setCount] = useState(0);
  const [disponible, setDisponible] = useState(stock);
  return (
    <Card id="contenedor" lassName="text-center">      
      <Card.Body>        
        <Card.Title>Disponibles {disponible}</Card.Title>
        <div id="botones">
          <Button id="boton-" variant="primary" onClick={() => { count > 0 ? (setCount(count - 1), setStock(disponible + 1)) : (alert("el carrito ya esta vacio")) }}>-</Button>
          <Card.Text>
            cantidad a comprar {count}
          </Card.Text>
          <Button id="boton+"variant="primary" onClick={() => { disponible > 0 ? (setCount(count + 1), setStock(disponible - 1)) : (alert("no hay mas stock")) }}>+</Button>
        </div>
      </Card.Body>
    </Card>
  )
}


export default ItemCount;