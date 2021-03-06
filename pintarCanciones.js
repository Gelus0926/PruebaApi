//Función para recorrer un arreglo
 export function pintarCanciones(canciones){
    
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
        //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //Rutina para llenado
        let columna=document.createElement("div")
        columna.classList.add("col","pb-3")
        
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto=document.createElement("img")
        foto.classList.add("h-100")
        foto.classList.add("h-100","img-fluid")
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

    });
}