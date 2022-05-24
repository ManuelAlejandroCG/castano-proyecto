import {createContext,useState, useContext} from "react";
import {Swal} from 'sweetalert2'
import Cart from "../Cart";

export const useCartContext = () => useContext(CartContext)

const CartContext = createContext({
    productos: [],
    add: () => {},
    remove: () => {},
    clear: () => {},
    isInCart: () => {},
    cantidad: () => {},
    itemsTotal: () => {},
    precioTotal: () =>{}
});

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    function findID(array, x) {
        return array.find((element) => {
          return element.id === x;
        })
      }

    const add = (product) => {
        const esta = productList.findIndex(item => item.id === product.id)
        if (esta !== -1) {
            var cantidadActual = findID(productList, product.id).quantity
            if(cantidadActual+product.quantity <= product.stock){
                setProductList(productList.map(p => p.id === product.id ? {
                    ...p,
                    quantity: p.quantity + product.quantity
                } : p)); 
            } else {
                const Swal = require('sweetalert2')
            }                                 
        } else {            
            setProductList([product, ...productList])
        }
    }

    const remove = (id) => {
        setProductList(productList.filter((item) => item.id !== id))
    }

    const clear = () => {
        setProductList([]);
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    const cantidad = () => {
        return productList.reduce((total, value)=>{
            return total + value.quantity
        }, 0)
    }

    const itemsTotal =() => {
        return productList.reduce((total, item)=> total + item.quantity, 0);
    }    

    const precioTotal = () => {
        return productList.reduce((total, item) => total + item.quantity * item.precio, 0);
    }

    return (<CartContext.Provider value = {{
                productos: productList,
                add,
                remove,
                clear,
                isInCart,
                cantidad,
                itemsTotal,
                precioTotal
            }}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContext;

