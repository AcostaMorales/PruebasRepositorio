//Declarar variables en JavaScript
//const -> variable que no cambia
//let -> variable que puede cambiar
//var -> variable que puede cambiar (no se usa mucho)

const http =  require('http');

function requestController() {
    //logica de nuestra funcion
    console.log("Hola mundo");

}

//Configuracion del servidor
const server = http.createServer(requestController);

server.listen(3000);