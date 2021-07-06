import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase';
import '../styles.css';

//comienzo del componente
function ItemDetailContainer() {

  const {idurl} = useParams();//almaceno el parametro de la URL
  const [cursos, setCursos] = useState([])//useState para actualizar el valor del array cursos


  //useEffect que muestra el contenido de las tarjetas el el primer renderizado 
  useEffect(()=>{

      //función que llama a la API, baja los datos y actualiza el array cursos, que es de donde vamos a sacar los datos a renderizar. Si hay un parametro en la URL con ID de curso, baja solo ese. Si no lo hay, los baja todos.
    async function obtenerDatos() {
      const db = getFirestore();
      const itemCollection = db.collection("cursos");
      const respuesta = (idurl === undefined ? await itemCollection.get() : await itemCollection.where("id", "==", parseInt(idurl)).get()) // esta es la linea que determina, en función de la URL, si debe bajar todos los documentos o solo uno.
      setCursos(respuesta.docs.map(curso => curso.data()))
    }
    
    obtenerDatos()
  }, [idurl])
  return (
    <div id="productosdisponibles">
      {
        //Uso un array y map así, en caso de que no haya parámetro en la URL para saber que producto mostrar, los muestro todos.
        cursos.map(curso => (
        <>
        <ItemDetail titulo={curso.titulo} precio={curso.precio} imagen={curso.imagen} descripcion={curso.descripcion} key={curso.id} stock={curso.stock} id={curso.id}/>
        </>
        ))
      }
    </div>
  )
} 
export default ItemDetailContainer