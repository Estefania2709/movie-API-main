// Importa la función 'check' de la librería 'express-validator'.
const { check } = require("express-validator");
// Importa la función 'validateResults' del archivo 'handleValidator.js'.
const { validateResults } = require("../utils/handdleValidator");
// Define un array con los diferentes checks que se van a aplicar en el validator para la ruta '/create'.
const createMovieValidator = [
    check("nombre")
    .exists() // Checa si el campo 'nombre' existe en el body de la request.
    .notEmpty(), // Checa si el campo 'nombre' no está vacío.
    check("autor")
    .exists() // Chequea si el campo 'autor' existe en el body de la request.
    .notEmpty(), // Chequea si el campo 'autor' no está vacío.
    check("año")
    .exists() // Chequea si el campo 'año' existe en el body de la request.
    .notEmpty(), // Chequea si el campo 'año' no está vacío.
    check("actores")
    .exists() // Chequea si el campo 'actores' existe en el body de la request.
    .notEmpty(), // Chequea si el campo 'actores' no está vacío.
    (req, res, next) => {
        // Llama a la función 'validateResults' y pasa los parámetros 'req', 'res' y 'next'.
        return validateResults(req, res, next);
    }
];


// Exporta el array de checks como un objeto. 
module.exports = { createMovieValidator };