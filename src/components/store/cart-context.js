import {createContext,useState} from "react";
import {Swal} from 'sweetalert2'

const CartContext = createContext({
    productos: [],
    add: () => {},
    remove: () => {},
    clear: () => {},
    isInCart: () => {},
    cantidad: () => {}
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
            console.log({esta})
            setProductList([product, ...productList])
        }
        console.log({productList})
    }

    const remove = (id) => {
        const itemARemover = productList.findIndex(item => item.id === id);
        setProductList(productList.filter(i => i.id !== id))
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

    return (<CartContext.Provider value = {{
                productos: productList,
                add,
                remove,
                clear,
                isInCart,
                cantidad
            }}>
                {children}
        </CartContext.Provider>
    )
}

export default CartContext;