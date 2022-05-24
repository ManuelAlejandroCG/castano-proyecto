import { useState } from "react"
import { collection, addDoc, getFirestore} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "./store/cart-context"
import "./Checkout.css"
import Spinner from "./Spinner";


const Checkout = () => {
    const db = getFirestore();
    // buyer nombre tel correo --- item id title price amount date total
    const { productos, precioTotal, clear } = useCartContext();

    const [load, setLoad] = useState(false);
    const [idOrden, setIdOrden] = useState();

    const [cliente, setCliente] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const { Nombre, Email, Telefono } = cliente;

    const handleInputChange = (e) => {
        setCliente(({
            ...cliente,
            [e.target.name]: e.target.value
        }))
    }

    const generarOrden = async (data) => {
        setLoad(true)
        try {
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fecha = new Date()
        const items = productos.map(e => { return { id: e.id, title: e.nombre, price: e.precio, amount: e.quantity, } })
        const total = precioTotal()
        const data = { cliente, items, fecha, total }
        console.log("data", data)
        generarOrden(data)
    }

    return (
        <>
            <h1>Finalizar compra</h1>
            <hr />
            {load ? <Spinner /> 
            : (!idOrden&&<div>
                <h4>Complete los siguientes datos</h4>
                <form className="formulario" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="Nombre"
                        placeholder="Nombre"
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        value={Email}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <input
                        type="number"
                        name="Telefono"
                        placeholder="Telefono"
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <input
                        type="submit"
                        value="Finalizar Compra"
                        className="btn btn-success"
                    />
                </form>
            </div>)

            }
            <div>
                {
                    idOrden&&(
                        <div>
                            <h3>Compra finalizada</h3>
                            <h4>{'codifo de orden:' + idOrden}</h4>
                            <Link to="/"><button>Volver</button></Link>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default Checkout