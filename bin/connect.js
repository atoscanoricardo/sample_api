const mongoose = require("mongoose");

// Usuario: atoscano
// Contraseña: erodbsPMeJy4Ha7B

//Intenbtamos conectarnos
try {
    //se intenta establecer una conexion con los datos de conexion
    mongoose.connect("mongodb+srv://atoscano:erodbsPMeJy4Ha7B@cluster0.vkmql.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );
    //en caso de esablecer la conexion, se muestra en consola este mensaje
    console.log("Connected databases.");
} catch (e) {
    //en caso de haber un error se muestra en consola el error
    console.error(e);
}
