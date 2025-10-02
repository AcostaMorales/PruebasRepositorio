//Declarar variables en JavaScript
//const -> variable que no cambia
//let -> variable que puede cambiar
//var -> variable que puede cambiar (no se usa mucho)
require ('dotenv').config();

const http =  require('http');

function requestController() {
    //logica de nuestra funcion
    console.log("Hola mundo");

}

//Configuracion del servidor
const server = http.createServer(requestController);

const PORT = process.env.PORT ;

server.listen(PORT, function () {
    console.log(`Servidor escuchando en el puerto:` +PORT);
});

