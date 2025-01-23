import mongoose from 'mongoose';

// Esquema de Empleado
const empleadoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
    apellido1: { type: String, required: true },
    apellido2: { type: String },
    codigo_departamento: { type: Number, required: true },
}, { timestamps: true });

// Pre-hook para asignar un código único incremental
empleadoSchema.pre('save', async function(next) {
    const maxEmpleado = await Empleado.findOne().sort({ codigo: -1 });  // Buscar el último código
    this.codigo = maxEmpleado ? maxEmpleado.codigo + 1 : 1;  // Si no hay, empieza en 1
    next();
});

export const Empleado = mongoose.model('Empleado', empleadoSchema);
