import { useEffect, useState } from "react";
import Item from './Item';
import '../styles.css';

//funcion que simula una API
function mock(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
        resolve([
            {"id": 1, "titulo" : "Decalogo de la traducción legal", "disertante": "Rosana Bailone", "precio" : 1800, "stock" : 5},
            {"id": 2, "titulo" : "Cómo conseguir clientes de traducción", "disertante": "Juan Macarlupu", "precio" : 1800, "stock" : 20},
            {"id": 3, "titulo" : "Perfeccionamiento en lengua española", "disertante": "María Esther Capurro", "precio" : 1800, "stock" : 10},
            {"id": 4, "titulo" : "Traducción técnica", "disertante": "Julieta Olivero", "precio" : 1800, "stock" : 7},
            {"id": 5, "titulo" : "La traducción literaria al rescate. Género, estilo y voz autoral", "disertante": "Guillermo Badenes", "precio" : 1800, "stock" : 1},
            {"id": 6, "titulo" : "Diez estrategias para mejorar la retórica en tus traducciones", "disertante": "Rosana Bailone", "precio" : 1400, "stock" : 10},
            {"id": 7, "titulo" : "Jornadas de Español Neutro y Doblaje", "disertante": "Paula Safar", "precio" : 1800, "stock" : 18},
            {"id": 8, "titulo" : "Más corrección de traducciones y normativa lingüística española", "disertante": "Juan Macarlupu", "precio" : 1800, "stock" : 12}
        ]);
      } else {
        reject({ message: "Errorcito" });
      }
    }, 2000);
  });
}

//comienzo del componente
function ItemList() {
  //useState para actualizar el valor del array cursos
  const [cursos, setCursos] = useState([])

  //función que llama a la API, baja los datos y actualiza el array cursos, que es de donde vamos a sacar los datos a renderizar
  async function obtenerDatos() {
    const datos = await mock(true);
    setCursos (datos)
  }
  //useEffect que actualiza el contenido de las tarjetas el el primer renderizado 
  useEffect(()=>{
    obtenerDatos()
  }, [])
  
  return (
    <div id="productosdisponibles">
      {
        cursos.map(curso => (
        <>
        <Item titulo={curso.titulo} precio={curso.precio} stock={curso.stock} />
        </>
        ))
      }
    </div>
)
}
export default ItemList;