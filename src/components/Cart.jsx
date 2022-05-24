import React from 'react'
import CartItem from './CartItem';
import { useCartContext } from './store/cart-context'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { productos, clear, precioTotal } = useCartContext();
    return (
        <div className='objetoCarrito'>
            {productos.map((item) =>(
                <CartItem key={item.id} item={item} />
            ))}
            {productos.length > 0 ? (
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={() => clear()}> Vaciar Carrito</button>
                    <Link to='/checkout'>
                        <button> Finalizar compra</button>
                    </Link>
                    
                </>
            ) : (
                <>
                    <h2>El carrito esta vacio</h2>                
                    <Link to={'/'}>
                        <button>ir a comprar</button>
                    </Link>                   
                </>
            )}            
        </div>       
    )
}


export default Cart