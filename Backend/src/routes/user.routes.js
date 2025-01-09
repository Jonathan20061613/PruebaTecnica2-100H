// Controladores y Dependencias
import { getUser, postUser} from "../controllers/user.controller.js";
import express from 'express';

// Router de Express
export const userRouter = express.Router();

// Rutas 
userRouter.get('/obtener', getUser);
userRouter.post('/crear', postUser);
