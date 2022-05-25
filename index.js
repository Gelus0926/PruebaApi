import { obtenerCanciones } from "./servicioGenerarCancion.js";
import { pintarCanciones } from "./pintarCanciones.js";

//Llamar generar función generarToken
let canciones=await obtenerCanciones();

//llamar la funcion pintar canciones
pintarCanciones(canciones.tracks);