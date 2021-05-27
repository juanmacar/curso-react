import { useEffect, useState } from "react";
import ItemDetail from './ItemDetail';
import '../styles.css';

//funcion que simula una API
function mock(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
        resolve([
          {"id": 1, "titulo" : "Decalogo de la traducción legal", "disertante": "Rosana Bailone", "precio" : 1800, "stock" : 5, "imagen" :"curso1.png", "descripcion" : "En este curso, Rosana nos va a hablar de la fama que tiene la traducción legal, de las diferencias con otras áreas de especialización, de las variantes dentro del contenido legal, de las habilidades que tiene que tener un buen traductor (legal), de la formación complementaria que puede recibir (y dónde) y de los recursos con los que debe contar."},
          {"id": 2, "titulo" : "Cómo conseguir clientes de traducción", "disertante": "Juan Macarlupu", "precio" : 1800, "stock" : 20, "imagen" :"curso2.png", "descripcion" : "En este curso vamos a aprender dónde empezara buscar clientes si recién te recibís (o si necesitás ampliar tu cartera de clientes), vómo decirle a un cliente actual que querés que te pague más (sin que deje de mandarte trabajo), cómo construir una buena reputación entre colegas y clientes, la fórmula que uso para responder cuando me ofrecen pagarme menos de lo que pedí, cómo decidir si tomar un proyecto de un cliente desconocido, qué hacer si un cliente se niega a pagar (o si está atrasado), qué decirle a un cliente que no te respondió cuando mandaste una prueba de traducción, cómo elegir el asunto de tus mensajes para maximizar las chances de que lo abran y muchos temas más."},
          {"id": 3, "titulo" : "Perfeccionamiento en lengua española", "disertante": "María Esther Capurro", "precio" : 1800, "stock" : 10, "imagen" :"curso3.png", "descripcion" : "En estos cursos, María Ester nos va a a hablar de algunas de las partes más difíciles de corregir traducciones u otros textos. En la primera parte, vamos a aprender sobre uno de los grandes terrores de nuestra profesión: el gerundio. Vamos a aprender cómo usarlo y cómo corregir errores en su uso. Después vamos a pasar a estudiar el subjuntivo y sus reglas, y vamos a terminar trabajando con las estructuras condicionales.En la segunda parte, nos vamos a poner manos a la obra con los géneros discursivos. Así, no solo vamos a saber reconocerlos, sino que también vamos a aprender cuáles son los errores más comunes según el tipo de texto de que se trate. Estos son algunos de los temas de los que vamos a hablar el sábado: redacción clara en español y «Plain English» en inglés, aspectos para tener en cuenta cuando traducimos o redactamos distintos tipos de textos, análisis de textos, caracterización, corrección según el género discursivo correspondiente. Vamos a trabajar con textos de divulgación, jurídicos, económico-financieros, científicos, periodísticos, turísticos. Vamos a identificar los errores más comunes según la tipología textual y vamos a hacer ejercicios de corrección."},
          {"id": 4, "titulo" : "Traducción técnica", "disertante": "Julieta Olivero", "precio" : 1800, "stock" : 7, "imagen" :"curso4.png", "descripcion" : "Qué es la traducción técnica y cómo diferenciarla de la traducción científica. Qué características de los textos técnicos hay que tener en cuenta a la hora de traducir. Qué tipo de clientes necesitan traducciones técnicas. Qué tipo de textos técnicos suelen traducirse. Cuáles son los desafíos que nos plantean el mercado y los clientes. Cómo organizarse para poder trabajar con textos técnicos. Cómo localizar (o no) números. Qué unidades de medida se usan y cómo traducirlas. Qué son los estándares internacionales y qué relación tienen con la traducción técnica. Qué son las etiquetas HTML y cómo leerlas. Qué debemos saber sobre código a la hora de traducir. Qué son las vistas y los cortes, y qué vocabulario debemos entender a la hora de traducir imágenes. Cómo aplicar el lenguaje no sexista en la traducción técnica. Qué recursos podemos consultar al hacer búsquedas terminológicas. Qué técnicas se pueden aplicar para encontrar el término correcto. Qué características de las herramientas CAT nos ayudan al traducir textos técnicos. Qué elementos no pueden faltar al realizar un control de calidad final. Qué conceptos industriales debemos conocer para empezar a especializarnos."},
          {"id": 5, "titulo" : "La traducción literaria al rescate. Género, estilo y voz autoral", "disertante": "Guillermo Badenes", "precio" : 1800, "stock" : 1, "imagen" :"curso5.png", "descripcion" : "La traducción literaria se ocupa de ciertas textualidades en constante cambio. Su poder radica en la adaptabilidad a géneros en ocasiones inexistentes en las lenguas de llegada, en su recreación, y en la capacidad de transformar, moldear y desafiar las reglas de la propia lengua, a la vez que en su adecuación a modelos o normativas protoexistentes: una verdadera paradoja: mantiene la ilusión de adaptación mientras reescribe los patrones literarios. En este sentido, el arte de la traducción literaria deviene el oficio de detectar qué hace a un texto literario (que no es cada palabra), qué constituye el estilo autoral (que no es cada giro), y dónde buscar la personalidad de una literariedad (que no es a veces en lugares obvios). Un recorrido por una variedad de problemas de traducción nos entrenará para ejercitar estas estrategias, sin dudas aplicables a otras textualidades y otros géneros ya que, después de todo, la literatura es el origen de la lengua y su expresión más acabada.Sin un ojo avezado en desentrañar las características de un texto literario, se corre el riesgo de ahogar la voz autoral con la voz traslativa. Sin embargo, la voz de quien traduce no puede ser sino un megáfono que replique las palabras, el estilo, el movimiento y la personalidad de un/a autor/a con fuerza y convicción. El mercado editorial requiere de cada vez más traductores con poder de lectura, recreación y adaptación. Proponemos una serie de actividades para ejercitar tanto nuestra capacidad de lectura, de resolución de problemas, de definición de estilos autorales, y de imitación a través de la traducción para hacernos un lugar en un mercado que nos necesita."},
          {"id": 6, "titulo" : "Diez estrategias para mejorar la retórica en tus traducciones", "disertante": "Rosana Bailone", "precio" : 1400, "stock" : 10, "imagen" :"curso6.png", "descripcion" : "El mal del momento, traducir en piloto automático, hacer el menor esfuerzo, mientras que no haya errores objetivos. ¿Cómo mejorar nuestra escritura? (prácticas complementarias y consciencia del proceso mental y del uso de la lingüística)¡Que lo que nos diferencie de los traductores automáticos no sean solo los errores! Presentación de las diez estrategias con dos ejemplos cada una: 1: Voz pasiva/activa/pasiva con “se”; 2: uso de palabras vacías (como, “cosa”); 3: adecuación terminológica; 4: referencia anafórica, 5: alteración del orden sintáctico, 6: Construcción “Al hacer algo….” (By doing sth…); 7: omisiones intencionales; 8: adiciones intencionales; 9: cambio de una estructura gramatical por otra; 10: sinonimia."},
          {"id": 7, "titulo" : "Jornadas de Español Neutro y Doblaje", "disertante": "Paula Safar", "precio" : 1800, "stock" : 18, "imagen" :"curso7.png", "descripcion" : "En la primera sesión, vamos a empezar por identificar la importancia del español neutro, para que sirve y cuáles son los prejuicios más comunes al respecto. ¿Por qué el español neutro se parece al español mexicano? Paula nos va a sacar esa duda. También nos va a explicar qué significa neutralizar la lengua y cómo repercute esta neutralización sobre las estructuras, la conjugación de los verbos y el vocabulario. Y hablando de vocabulario... ¿cómo elegimos la terminología? Paula nos va a contar los procesos que sigue para elegir el mejor término en cada ocasión y nos va a ayudar a crear nuestro glosario de términos neutros. También vamos a hablar del español neutro y los niños, y del español neutro y la vulgaridad.En la segunda sesión, vamos a comenzar la jornada definiendo qué es el doblaje y cuál es su función. Vamos a identificar los formatos y las particularidades del material de partida y del material de llegada, para que sepamos exactamente qué debemos entregar al cliente. Después, vamos a avanzar hacia los tipos de doblaje más adecuados para documentales, programas deportivos, resúmenes informativos, concursos, eventos, reality shows, talk shows, entrevistas, ficción y dibujos animados. Vamos a descubrir cómo trabajar con cada uno. Por último, vamos a aprender cuáles son las dificultades propias de esta disciplina y cómo es el mercado laboral, para poder buscar los primeros clientes."},
          {"id": 8, "titulo" : "Más corrección de traducciones y normativa lingüística española", "disertante": "Juan Macarlupu", "precio" : 1800, "stock" : 12, "imagen" :"curso8.png", "descripcion" : "Cómo se clasifican los signos de puntuación y por qué es importante. Cuáles son las reglas menos conocidas sobre el uso de la coma. Cuándo suele ponerse coma (pero no es correcto). Cuáles son las reglas menos conocidas sobre el uso de los dos puntos. Cómo usar el punto y coma sin miedo. Cómo usar el guion y la raya correctamente. Las diez principales reglas sobre la concurrencia de signos. Cuáles son los errores más comunes de concordancia de número. Cómo saber si usar singular o plural en casos tramposos. Cuáles son los casos difíciles en la concordancia de sujetos compuestos."}
      ]);
      } else {
        reject({ message: "Errorcito" });
      }
    }, 2000);
  });
}

//comienzo del componente
function ItemDetailContainer() {
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
        <ItemDetail titulo={curso.titulo} precio={curso.precio} imagen={curso.imagen} descripcion={curso.descripcion} key={curso.id} />
        </>
        ))
      }
    </div>
)
}
export default ItemDetailContainer