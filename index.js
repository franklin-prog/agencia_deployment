//const express = require("express");

import express from "express"
import router from './routes/index.js'
import db from "./config/db.js"
import dotenv from "dotenv"

dotenv.config({ path : 'variables.env'})


const app = express();


// definir la conexion a la base de datos

db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch(error => console.log(error));

//definir PUG (motor de plantilla)

app.set("view engine", "pug");

// Obtener el año actual

app.use( (req, res, next) => {
   
    const year = new Date();

    res.locals.ActualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";
    next();
} )

//definir el body parse - tener lectura de los datos ingresados por el usuario en un formulario

app.use(express.urlencoded({extended: true}));

//definir los archivos estaticos

app.use(express.static('public'));

// definir el routing

app.use("/", router);

/*Puerto y Host para la app */

const host = process.env.HOST || '0.0.0.0'

const port = process.env.PORT || 4000

app.listen(port, host, () => {
    console.log(`EL servidor está escuchando conexiones desde el puerto ${port}`)
})