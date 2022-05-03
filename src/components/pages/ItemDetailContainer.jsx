import Reac, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css'
import imageni5 from "../images/i5.png"
import imageni7 from "../images/i7.png"
import imageni9 from "../images/i9.png"

function getItem(id) {
    const myPromise = new Promise((resolve, reject) => {
        const productList = [
            {
                id:1,
                nombre: 'i5-12400',
                precio: '$400',
                stock: '8',
                category: 'micro',
                imagen: imageni5
            },
            {
                id: 2,
                nombre: 'i7-12700',
                precio: '$550',
                stock: '10',
                category: 'micro',
                imagen: imageni7
            },
            {
                id: 3,
                nombre: 'i9-12900',
                precio: '$700',
                stock: '2',
                category: 'micro',
                imagen: imageni9
            }
        ];
        const item = productList.filter(item => item.id === parseInt(id));
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        getItem(id)
        .then(res=>{
            setItem(res);
        })
        .catch(err=>{
            console.log(err);
            alert('ocurrio un error en detail, mas informacion en consola')
        });
    },[id])

    return (
       <div className='contenedorDetails'>
           <ItemDetail item={item}/>
       </div>
    )
}


export default ItemDetailContainer