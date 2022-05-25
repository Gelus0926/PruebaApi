//1. URI PARA DONDE VOY
const URI='https://accounts.spotify.com/api/token'

//2. Almaceno los datos de envio
let dato1='client_id=1c77af0d7b074dd895f9874e0cd9fa88'
let dato2='client_secret=abdbdfafccca40d08f8acd579e004188'
let dato3='grant_type=client_credentials'


//3.Configuro la petición 
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Consumir el servicio
export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())
    
}