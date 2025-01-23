import express from 'express';
import { obtenerEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado } from '../controllers/empleados.controllers.js';

export const empleadoRouter = express.Router();

// Obtener todos los empleados
empleadoRouter.get('/obtener', obtenerEmpleados);

// Crear un nuevo empleado
empleadoRouter.post('/crear', crearEmpleado);

// Actualizar un empleado por su código
empleadoRouter.put('/actualizar/:codigo', actualizarEmpleado);

// Eliminar un empleado por su código
empleadoRouter.delete('/eliminar/:codigo', eliminarEmpleado);

export default empleadoRouter;