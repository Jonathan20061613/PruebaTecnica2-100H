// Dependencias
import express from 'express';
import dotenv from 'dotenv';
import { connectionMongo } from './src/config/db.js';
import departamentoRouter from './src/routes/departamentos.routes.js';
import empleadoRouter from './src/routes/empleados.routes.js';

// Configuración de variables de entorno y conexión a la base de datos
dotenv.config();
connectionMongo();

// Inicialización de la aplicación
const app = express();
const port = process.env.PORT;

// Middleware para parseo de JSON
app.use(express.json());

// Rutas principales
app.use('/empleados', empleadoRouter);       // Rutas para gestión de empleados
app.use('/departamentos', departamentoRouter); // Rutas para gestión de departamentos

// Inicio del servidor
app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el puerto ${port}`);
});
