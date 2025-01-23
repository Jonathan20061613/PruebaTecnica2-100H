import express from 'express';
import { obtenerDepartamentos, crearDepartamento, actualizarDepartamento, eliminarDepartamento } from '../controllers/departamentos.controllers.js';

export const departamentoRouter = express.Router();

// Obtener todos los departamentos
departamentoRouter.get('/obtener', obtenerDepartamentos);

// Crear un nuevo departamento
departamentoRouter.post('/crear', crearDepartamento);

// Actualizar un departamento por su código
departamentoRouter.put('/actualizar/:codigo', actualizarDepartamento);

// Eliminar un departamento por su código
departamentoRouter.delete('/eliminar/:codigo', eliminarDepartamento);

export default departamentoRouter;