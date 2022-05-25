import { generarToken } from "./servicioGenerarToken.js";

//Llamar generar función generarToken
let tokenRespuesta=await generarToken();
let token =`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`;

//URI DEL SERVICIO
const URI="https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP/top-tracks?market=US";

//CONFIGURO LA PETICION
const peticion={
    method:"GET",
    headers: {Authorization: token} 
}

//CONSUMO EL SERVICIO
export async function obtenerCanciones(){
    let respuesta=await fetch(URI,peticion)
    return respuesta.json()
}
