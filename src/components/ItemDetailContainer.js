import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import '../styles.css';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase';


//comienzo del componente
function ItemDetailContainer() {
  const {idurl} = useParams();
  //useState para actualizar el valor del array cursos
  const [cursos, setCursos] = useState([])

  //función que llama a la API, baja los datos y actualiza el array cursos, que es de donde vamos a sacar los datos a renderizar
  async function obtenerDatos() {
    const db = getFirestore();
    const itemCollection = db.collection("cursos");
    itemCollection.get()
    .then((respuesta)=>{
      setCursos(respuesta.docs.map(curso => curso.data()))
    })
  }
  //useEffect que actualiza el contenido de las tarjetas el el primer renderizado 
  useEffect(()=>{
    obtenerDatos()
  }, [])
  
  let retorno = "";
  if (idurl === undefined) {
  return (
    <div id="productosdisponibles">
      {
        cursos.map(curso => (
        <>
        <ItemDetail titulo={curso.titulo} precio={curso.precio} imagen={curso.imagen} descripcion={curso.descripcion} key={curso.id} stock={curso.stock} id={curso.id}/>
        </>
        ))
      }
    </div>
)
    } else {
      for (const item of cursos) {
        if (item.id === parseInt(idurl)) {
          retorno = <ItemDetail titulo={item.titulo} precio={item.precio} imagen={item.imagen} descripcion={item.descripcion} key={item.id} stock={item.stock} id={item.id}/>
          break
        }
      }
      return (retorno)
    }

}
export default ItemDetailContainer