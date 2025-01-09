// Dependencias y Modulos

import login from '../services/loginService.js';
import express from 'express';

// Router de Express
const loginRouter = express.Router();


loginRouter.post('/', login);

export default loginRouter;