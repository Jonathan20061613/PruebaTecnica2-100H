// Dependencias
import express from 'express';
import dotenv from 'dotenv';
import { connectionMongo } from './src/config/db.js';
import { userRouter } from './src/routes/user.routes.js';
import loginRouter from './src/routes/login.routes.js';

// Configuracion base de datos y variables de Entorno
const app = express();
dotenv.config();
connectionMongo();

const port = process.env.PORT

// Ruta POSTMAN
app.use(express.json());
app.use('/usuarios', userRouter);
app.use('/iniciarSesion', loginRouter);

app.listen(port, ()=>{
    console.log('El servidor se esta ejecutando en el puerto ',port)
});