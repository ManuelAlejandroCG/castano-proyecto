import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './ItemListContainer.css'
import imageni5 from "../images/i5.png"
import imageni7 from "../images/i7.png"
import imageni9 from "../images/i9.png"

function getProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
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
  }, [categoryId]);
  return (
    <div className="contenedorCards">
      <ItemList items={itemList} />
    </div>
  )
}


export default ItemListContainer;