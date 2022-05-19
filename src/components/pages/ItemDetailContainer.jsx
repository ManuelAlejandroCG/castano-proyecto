import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore, query, where} from 'firebase/firestore'
import ItemDetail from '../ItemDetail';
import './ItemDetailContainer.css'


function getItem(id){
  const db = getFirestore();
  const itemRef = doc(db,'items' , id);
  return getDoc(itemRef);
}

function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const {id} = useParams();
    
    useEffect(()=>{
        getItem(id)
        .then(snapshot=>{
            setItem({...snapshot.data(), id: snapshot.id});
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