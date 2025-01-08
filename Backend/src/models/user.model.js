// Dependencias
import mongoose from "mongoose";

// SCHEMA
const userSchema = new mongoose.Schema({
    fullName:{type: String, require:true},
    email: {type: String, require:true, unique:true},
    password: {type: String, require:true},
    role: {type: String, default: 'cliente'}
});

// Definición de Modelo
export const userModel = mongoose.model('user', userSchema);