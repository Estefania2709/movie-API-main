const express = require("express");
const router = express.Router(); // Creamos nuestro enrutador de express

// Importamos las funciones del controlador que se encargarán de manejar las solicitudes de los clientes
const { getMovie, getMovies, deleteMovie, updateMovie, createMovie } = require("../controllers/movieControllers");
// Importamos el validador que se encargará de verificar la validez de los datos que el cliente envía en su solicitud
const { createMovieValidator } = require("../validators/movieValidators")


// Creamos las rutas para manejar las solicitudes de los clientes, 
//cada ruta define qué función del controlador se debe ejecutar para manejar la solicitud 
//y si es necesario, qué validador se debe usar para verificar la validez de los datos enviados por el cliente.


// Cuando el cliente envíe una solicitud GET a la raíz (/), se ejecutará la función getMovies del controlador
router.get("/", getMovies);
// Cuando el cliente envíe una solicitud GET con un parámetro de ruta llamado "id", se ejecutará la función getMovie del controlador, pasando el valor de "id" como argumento
router.get("/:id", getMovie);
// Cuando el cliente envíe una solicitud POST a la raíz (/), primero se ejecutará el validador createMovieValidator, y si los datos son válidos, se ejecutará la función createMovie del controlador
router.post("/", createMovieValidator, createMovie);


// Exportamos nuestro enrutador para poder usarlo en nuestra aplicación express
module.exports = router;
