// Librerias
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Clave Secreta
const key = process.env.SECRET_KEY; 

//Generar y verificar Token
export function generateToken(payload){
    return new Promise((resolve, reject)=>{

        jwt.sign(payload, key, {expiresIn:'1h'}, (error, token)=>{
            if(error){
                reject(new Error('Error al generar JWT ' + error.message));
            }else{
                resolve(token);
            }
        });
    });
}

// Token Generado por Servidor
export const verifyToken = ()=>{
    return new Promise((resolve, reject)=>{
        jwt.verify(token, key, (error, decoded)=>{
            if(error) {
                reject(new Error('Error al generar JWT ' + error.message));
            }else{
                resolve(decoded);
            }
        });
    });
}



