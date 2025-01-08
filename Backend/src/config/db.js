// Dependencias 
import mongoose from "mongoose";

// prueba de Conexion con la base de datos
export async function connectionMongo(){
    try{
        // Conexion con la Base de Datos
        await mongoose.connect(process.env.DB_URL,{});
        console.log('se conecto correctamente la Base de Datos')
    }catch(error){
        console.error('Error de Conexión: ' + error)
    }
};

export default connectionMongo;