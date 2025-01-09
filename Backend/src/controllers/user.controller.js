// Dependencias
import { userModel } from '../models/users.model.js';
import bcrypt from 'bcryptjs';

// Peticiones
export const postUser = async (request, response) => {
    try {
        const { fullName, email, password, role } = request.body
        const codePassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            fullName,
            email,
            password: codePassword,
            role
        });

        return response.status(201).json({
            mensaje: 'Usuario Creado Correctamente',
            datos: newUser
        });

    } catch (error) {
        return response.status(401).json({
            mensaje: 'Ocurrio un Error al mostrar los Usuarios',
            problema: error || error.message
        });
    }
}

export const getUser = async (request, response) => {
    try {
        let users = await userModel.find();

        if (users.length === 0) {
            return response.status(200).json({
                mensaje: 'No hay usuarios almacenados'
            })
        }

        return response.status(200).json({
            mensaje: 'Se Encontraron Usuarios Almacenados',
            numerosUsuario: users.lenght,
            dato: users,
        })

    } catch (error) {
        return response.status(401).json({
            mensaje: 'Ocurrio un Error al mostrar los Usuarios',
            problema: error || error.message
        });
    }
}