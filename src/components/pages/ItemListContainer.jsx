import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './ItemListContainer.css'
import imageni5 from "../images/i5.png"
import imageni7 from "../images/i7.png"
import imageni9 from "../images/i9.png"
import vengance16 from "../images/vengance2x8.png"
import dominator32 from "../images/dominator2x16.png"
import vengance64 from "../images/vengance4x16.png"
import b450 from "../images/mb450-f.png"
import b460 from "../images/mb460-h.png"
import b550 from "../images/mb550-e.png"
import {collection, getDocs, getFirestore} from 'firebase/firestore'


function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        nombre: 'i5-12400',
        precio: '30999',
        stock: '8',
        category: 'micro',
        detail:'Procesador Intel Core i5-12400F BX8071512400F de 6 núcleos y 4.4GHz de frecuencia',
        imagen: imageni5
      },
      {
        id: 2,
        nombre: 'i7-12700',
        precio: '74999',
        stock: '10',
        category: 'micro',
        detail:'Procesador Intel Core i7-12700F BX8071512700F de 12 núcleos y 4.9GHz de frecuencia',
        imagen: imageni7
      },
      {
        id: 3,
        nombre: 'i9-12900',
        precio: '114999',
        stock: '2',
        category: 'micro',
        detail:'Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y 5.2GHz de frecuencia con gráfica integrada',
        imagen: imageni9
      },
      {
        id: 4,
        nombre: 'Corsair Vengance RGB 2x8GB',
        precio: '19999',
        stock: '12',
        category: 'memoria',
        detail: 'Pack de 2 memorias serie Vengance RGB Pro DDR4 de 8GB con una velocidad de 3600Mhz formato DIMM',
        imagen: vengance16
      },
      {
        id: 5,
        nombre: 'Corsair Dominator DDR4 2x16GB',
        precio: '41180',
        stock: '6',
        category: 'memoria',
        detail: 'Pack de 2 memorias serie Dominator Platinum RGB DDR4 de 16GB con una velocidad de 3600Mhz formato DIMM',
        imagen: dominator32
      },
      {
        id: 6,
        nombre: 'Corsair Vengance DDR4 4x16GB',
        precio: '57610',
        stock: '6',
        category: 'memoria',
        detail:'Pack de 2 memorias serie Vengance RGB Pro DDR4 de 16GB con una velocidad de 3200Mhz formato DIMM',
        imagen: vengance64
      },
      {
        id: 7,
        nombre: 'ROG Strix B450-f',
        precio: '30360',
        stock: '2',
        category: 'mother',
        detail:'Motherboard Asus ROG Strix B450-F, DDR4 max 128GB, Socket AM4, Chipset AMDB450',
        imagen: b450
      },
      {
        id: 8,
        nombre: 'ROG Strix B460-h',
        precio: '29990',
        stock: '2',
        category: 'mother',
        detail:'Motherboard Asus ROG Strix B460-H, DDR4 max 64GB, Socket 1200, Chipset B460-H',
        imagen: b460
      },
      {
        id: 9,
        nombre: 'ROG Strix B550-e',
        precio: '59000',
        stock: '2',
        category: 'mother',
        detail:'Motherboard Asus ROG Strix B550-E, DDR4 max 128GB, Socket AM4, Chipset B550',
        imagen: b550
      }
    ];
    const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
    setTimeout(() => {
      resolve(productsFiltered);
    }, 2000);
  });
  return myPromise
}

function ItemListContainer() {
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    getProducts(categoryId)
      .then(res => {
        setItemList(res);
      })
      .catch(err => {
        console.log(err);
        alert('ocurrio un error en list, mas informacion en consola')
      })
    // const db = getFirestore();

    // const itemCollection = collection(db, "items");
    // getDocs(itemCollection).then((snapshot => {console.log(snapshot.docs.map(doc=>{return{...doc.data(),id:doc.id}}))
    // }))
    // .catch(
    //   err=> console.log(err)
    // );
  }, [categoryId]);
  return (
    <div className="contenedorCards">
      <ItemList items={itemList} />
    </div>
  )
}


export default ItemListContainer;