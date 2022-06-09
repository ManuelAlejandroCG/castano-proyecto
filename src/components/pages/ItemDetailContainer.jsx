import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore, } from 'firebase/firestore'
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css'
import Spinner from '../Spinner';

function getItem(id){
  const db = getFirestore();
  const itemRef = doc(db,'items' , id);
  return getDoc(itemRef);
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [load, setLoad] = useState(true)    
    useEffect(()=>{
        setLoad(true)
        getItem(id)
        .then(snapshot=>{
            setItem({...snapshot.data(), id: snapshot.id});
            setLoad(false)
        })        
        .catch(err=>{
            console.log(err);
            alert('ocurrio un error en detail, mas informacion en consola')
        });
    },[id])

    return (
       <div className='contenedorDetails'>
           {load ? <Spinner/> : <ItemDetail item={item}/>}
       </div>
    )
}


export default ItemDetailContainer