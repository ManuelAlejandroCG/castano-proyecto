import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



function getProducts(categoria){
  const db = getFirestore();
  const itemCollection = collection(db, 'items');
  const q = categoria && query(itemCollection, where('categoria','==',categoria));
  return getDocs(q || itemCollection)
}

function ItemListContainer(){
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();
  
  useEffect(()=>{
    getProducts(categoryId)
    .then(snapshot => {
      setItemList(snapshot.docs.map(doc =>{
        return { ...doc.data(), id: doc.id}
      }));
    })
    .catch(err=>{
      console.log(err);
      alert('Verifique la consola');
    });
  }, [categoryId]);
  return (
    <div className="contenedorCards">
      <ItemList items={itemList} />
    </div>
  )
}

export default ItemListContainer;