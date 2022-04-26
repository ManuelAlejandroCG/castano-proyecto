import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ItemCount.css'

function ItemCount() {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);
  return (
    <Card id="contenedor" lassName="text-center">

      <Card.Header>Intel i7 7700k</Card.Header>
      <Card.Body>
        <Card.Text>7th Generation Intel® Core™ i7 Processors</Card.Text>
        <Card.Title>Stock {stock}</Card.Title>
        <div id="botones">
          <Button variant="primary" onClick={() => { count > 0 ? (setCount(count - 1), setStock(stock + 1)) : (alert("el carrito ya esta vacio")) }}>-</Button>
          <Card.Text>
            cantidad a comprar {count}
          </Card.Text>
          <Button variant="primary" onClick={() => { stock > 0 ? (setCount(count + 1), setStock(stock - 1)) : (alert("no hay mas stock")) }}>+</Button>
        </div>
      </Card.Body>
    </Card>

  )
}

export default ItemCount;