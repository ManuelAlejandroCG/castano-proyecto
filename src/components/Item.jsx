import React from 'react'
import { Card } from 'react-bootstrap';
import './Item.css';
import ItemCount from './ItemCount';


function Item({ item }) {
    return (
        <Card id="tarjetaStandar" style={{ width: '18rem' }}>
            <Card.Header>{item.nombre}</Card.Header>
            <Card.Img variant="top" src={item.imagen} alt="imagen del producto"></Card.Img>
            <Card.Body>                
                <Card.Text>{item.precio}</Card.Text>
                {/* <ItemCount stock={item.stock} /> */}
            </Card.Body>
        </Card>
    )
}

export default Item