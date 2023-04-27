// Definimos un objeto llamado "models"
// Este objeto contendrá las importaciones de los modelos 
//"usersModel" y "moviesModel"
const models = {
    usersModel: require("./nosql/usersModel"),
    moviesModel: require("./nosql/moviesModel")
};

// Exportamos el objeto "models" para que esté disponible para su uso en otros archivos
module.exports = models;