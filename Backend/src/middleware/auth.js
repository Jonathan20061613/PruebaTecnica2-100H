// Dependencias y Modulos
import { verifyToken } from '../lib/jwt.js';

// Crear Middleware
function auth() {
    return async (request, response, next) => {
        // Existencia del Token
        let token = request.headers['authorization'];
        console.log('Token obtenido de la cabecera ' + token);

        if (!token) {
            return response.status(401).json({
                mensaje: 'No se encontró token, permiso denegado'
            });
        }
        
        // Verificacion Token Permitido o no
        token = token.split(' ')[1]; 
        console.log('Token separado:  ' + token);

        // Manejo de errores al verificar el token
        try {
            const decoded = await verifyToken(token);
            console.log('Token decodificado ' + decoded);

            request.user = decoded;
        } catch (error) {
            return response.status(400).json({
                mensaje: 'Falló la autenticación del Token',
                problema: error.message || error
            });
        }

        next();
    }
}

export default auth;
