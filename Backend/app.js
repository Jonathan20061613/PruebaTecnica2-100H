// Dependencias
import express from 'express';
import dotenv from 'dotenv';
import connectionMongo from './src/config/db.js';

// Configuracion base de datos y variables de Entorno
const app = express();
dotenv.config();
connectionMongo();


const port = process.env.PORT


app.listen(port, ()=>{
    console.log('El servidor se esta ejecutando en el puerto ',port)
});