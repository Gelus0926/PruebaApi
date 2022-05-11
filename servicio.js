//Pasos para consumir un api con JS puro

//1.Declarar la URI
const URI="https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP/top-tracks?market=US";
const token="Bearer BQAD2c_QVA-nQiTy-T-MEYKQNQVBdC5Pbv11xazDk052yHFKB_G45h7Ggu5-5snMbXnldNUjs9Y1uYnPscTbZyvPvazbEBmLurjMNs6WvU4RJXK7Hn4kBeWyWGgfeLUPNULxLJKyR3WasCASz0c4d8qWtdCCpSfv1eA"; 

//2.Declarar los parametros de la petición
//Metodos, Cabeeras, Body
const peticion={
    method:"GET",
    headers: { "Authorization": token } 
};

fetch(url, parametros)
    .then(respuesta=> respuesta.json())
    .then(datos=> depurarDatos(datos));
