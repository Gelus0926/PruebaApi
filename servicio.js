//Pasos para consumir un api con JS puro

//1.Declarar la URI
const URI="https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP/top-tracks?market=US";
const token=" Bearer BQC1jCZaA_6RT2c9poh8FMb8okOr7FLJmRhRL87Xe_1HHHh57fs5sKHnA25XwTyXafS7wtTpg_YlP9cV7tDjQez1Nw3c18xAanNAeRs5CKOlHFb8267pd14_heeE83wj6DY1N2HWSo62wtnDepox_OOsGyKNr-KuN6k"; 

//2.Declarar los parametros de la petición
//Metodos, Cabeeras, Body
const peticion={
    method:"GET",
    headers: { Authorization: token } 

}

//Rutina para consumir api con metodo POST
//1.Para donde voy 
const URIPOST='https://accounts.spotify.com/api/token';

//2. almaceno los datos que voy a enviar
let dato1='client_id=1c77af0d7b074dd895f9874e0cd9fa88'
let dato2='client_secret=abdbdfafccca40d08f8acd579e004188'
let dato3='grant_type=client_credentials'

//3.Configuro la petición 
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}





/*
//3. Declaro el fetch (voy al servidor)
fetch(URI,peticion)
    .then(function(respuesta){
        return(respuesta.json())
    })
    .then(function(respuesta){
        console.log(respuesta)//respuesta es un objeto
        console.log(respuesta.tracks[0])//arreglo de 10 canciones
        /*console.log(respuesta.tracks[0].preview_url)
        respuesta.tracks.forEach(function(tracks){
            console.log(tracks.preview_url);
        });
        //Pinntar canciones
        pintarCanciones(respuesta.tracks)

    })
    .catch(function(error){
        console.log(error);
    })
//Función para recorrer un arreglo
function pintarCanciones(canciones){
    
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //Rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col")
        
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre=document.createElement("h5")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto=document.createElement("img")
        foto.classList.add("h-100")
        foto.src=cancion.album.images[0].url


        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        //Padres e Hijos
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}*/


//4. Voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+''+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})
