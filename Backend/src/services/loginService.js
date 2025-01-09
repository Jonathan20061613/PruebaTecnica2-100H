// Dependencias y Modulos
import { userModel } from "../models/users.model.js";
import { generateToken } from "../lib/jwt.js"; 
import bcrypt from 'bcryptjs';
import { request } from "express";

// Inicio de Sesión
const login = async (request, response) => {
    try {
        const { emailLogin, passwordLogin } = request.body;

        // Buscar al usuario por correo electrónico
        const userFound = await userModel.findOne({ email: emailLogin });

        // Verificar si el usuario no existe
        if (!userFound) {
            return response.status(404).json({ mensaje: 'Usuario no encontrado, por favor regístrate' });
        } 

        // Verificar si la contraseña es válida
        const isValidPassword = await bcrypt.compare(passwordLogin, userFound.password);

        // Si la contraseña no es válida, retornar error
        if (!isValidPassword) {
            return response.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Crear payload con los datos del usuario
        const payload = {
            id: userFound._id,
            name: userFound.fullName
        };

        // Generar el token de autenticación
        const token = await generateToken(payload);
        
        // Retornar el token y mensaje de éxito
        return response.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            tokenGenerado: token 
        });

    } catch (error) {
        return response.status(400).json({
            mensaje: 'Error en inicio de sesión',
            error: error.message || error
        });
    }
}

export default login;
