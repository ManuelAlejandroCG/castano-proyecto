import Reac, {useEffect, useState} from 'react'
import Item from './Item';
import ItemList from './ItemList';
import './ItemListContainer.css'
import imageni5 from "./images/i5.png"
import imageni7 from "./images/i7.png"
import imageni9 from "./images/i9.png"



function cargarProductos(){
    const myPromise = new Promise ((resolve, reject) =>{
        const itemList = [
                {
                  nombre: 'i5-12400',
                  precio: '$400',
                  stock: '8',
                  imagen: imageni5
                },
                {
                  id: 2,
                  nombre: 'i7-12700',
                  precio: '$550',
                  stock: '10',
                  imagen: imageni7
                },
                {
                  id: 3,
                  nombre: 'i9-12900',
                  precio: '$700',
                  stock: '2',
                  imagen: imageni9
                }
              ];
              setTimeout(()=>{
                  resolve(itemList);
              },2000);
    });
    return myPromise;
}


function ItemListContainer ({greeting}) {
    
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
        cargarProductos()
        .then(res =>{
            setItemList(res);
        })
    },[]);   
    return (
        <div className="contenedorCards">
        <ItemList items = {itemList}/>        
    </div>        
    )
}

export default ItemListContainer;