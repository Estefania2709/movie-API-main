//creando un esquema de mongoose para las peliculas
//y definiendo sus propiedades
const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        autor: {
            type: String
        },
        año: {
            type: Number
        },
        actores: {
            type: [String]
        },
    },
    {
        timestamps: true, //actualiza fecha y hora
        versionKey: false //para que no tenga una version por defecto
    }
);

module.exports = mongoose.model("movies", movieSchema)
