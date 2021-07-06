import { useEffect, useState } from "react";
import Item from './Item';
import '../styles.css';
import { getFirestore } from '../firebase';

//comienzo del componente
function ItemList() {
  //useState para actualizar el valor del array cursos
  const [cursos, setCursos] = useState([])
  
//Comienzo del llamado a la base de datos:
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
  
  if (cursos[0] === undefined) return <div className="loading"><div><h1>Loading</h1><br/><img src="images/spinner.gif" alt="preloader"/></div></div>
  return (
    <div id="productosdisponibles">
      {
        cursos.map(curso => (
        <>
        <Item titulo={curso.titulo} precio={curso.precio} id={curso.id} key={curso.id} imagen={curso.imagen}/>
        </>
        ))
      }
    </div>
)
}
export default ItemList;