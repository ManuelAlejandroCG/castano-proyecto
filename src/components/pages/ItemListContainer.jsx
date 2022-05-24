import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Spinner from '../Spinner';


function getProducts(categoria){
  const db = getFirestore();
  const itemCollection = collection(db, 'items');
  const q = categoria && query(itemCollection, where('categoria','==',categoria));
  return getDocs(q || itemCollection)
}

function ItemListContainer(){
  const [itemList, setItemList] = useState([]);
  const [load, setLoad] = useState(true);
  const { categoryId } = useParams();
  
  useEffect(()=>{
    setLoad(true)
    getProducts(categoryId)
    .then(snapshot => {
      setItemList(snapshot.docs.map(doc =>{
        return { ...doc.data(), id: doc.id}
      }));
      setLoad(false)
    })    
    .catch(err=>{
      console.log(err);
      alert('Verifique la consola');
    });
  }, [categoryId]);
  return (
    <div className="contenedorCards">
      {load ? <Spinner/> : <ItemList items={itemList} />}
    </div>
  )
}

export default ItemListContainer;