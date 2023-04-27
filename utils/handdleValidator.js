const { validationResult } = require("express-validator");

// Esta función se encarga de validar los resultados de las validaciones definidas en el archivo de validación correspondiente
// Si hay errores en la validación, la función envía una respuesta con el código de estado 403 y un objeto que contiene el array de errores.
// De lo contrario, llama a la siguiente función middleware.
const validateResults = (req, res, next) => {
    try {
        // Lanza una excepción si hay errores en la validación
        validationResult(req).throw();
        // Llama a la siguiente función middleware si no hay errores
        return next();
    } catch (err) {
        // Establece el código de estado de la respuesta a 403 si hay errores
        res.status(403);
        // Envía un objeto con el array de errores como respuesta
        res.send({ errors: err.array() })

    }
};


// Exporta la función para que pueda ser utilizada en otros archivos.
module.exports = { validateResults };