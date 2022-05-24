import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import './Item.css';
import ItemCount from './ItemCount';


function Item({ item }) {
    return (
        <Card id="tarjetaStandar" style={{ width: '18rem' }}>
            <Card.Header>{item?.nombre}</Card.Header>
            <Card.Img variant="top" src={item?.imagen} alt="imagen del producto"></Card.Img>
            <Card.Body>
                <Card.Text>{item?.precio}</Card.Text>
            </Card.Body>
            <Link to={'/item/' + item?.id}>
                <Button variant="primary" >Ver Detalle</Button>
            </Link>
        </Card>
    )
}

export default Item