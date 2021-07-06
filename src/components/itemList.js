import { useEffect, useState } from "react";
import Item from './Item';
import '../styles.css';
import { getFirestore } from '../firebase';
import {useParams} from 'react-router-dom';

//comienzo del componente
function ItemList() {
  //useState para actualizar el valor del array cursos
  const [cursos, setCursos] = useState([])
  const {cat} = useParams();//almaceno el parametro de la URL
  const imgURLfixer = cat !== undefined ? "../" : ""; //esto es una "solución creativa" para el problema de que, al agregar "/category" antes del nombre de la categoria, como pide el desafio, se rompian las URL de las imagenes. Ahora, si viene con categoria, agrego un "../" a la URL.
  
//Comienzo del llamado a la base de datos:
async function obtenerDatos() {
  const db = getFirestore();
  const itemCollection = db.collection("cursos");
  const respuesta = (cat === undefined ? await itemCollection.get() : await itemCollection.where("categoria", "==", cat).get()) // esta es la linea que determina, en función de la URL, si debe bajar todos los documentos o solo uno.
  setCursos(respuesta.docs.map(curso => curso.data()))
}

   //useEffect que actualiza el contenido de las tarjetas el el primer renderizado 
  useEffect(()=>{
    obtenerDatos()
  }, [cat])
  
  if (cursos[0] === undefined) return <div className="loading"><div><h1>Loading</h1><br/><img src={`${imgURLfixer}images/spinner.gif`} alt="preloader"/></div></div>
  return (
    <div id="productosdisponibles">
      {
        cursos.map(curso => (
        <>
        <Item titulo={curso.titulo} precio={curso.precio} id={curso.id} key={curso.id} imagen={`${imgURLfixer}images/${curso.imagen}`}/>
        </>
        ))
      }
    </div>
)
}
export default ItemList;