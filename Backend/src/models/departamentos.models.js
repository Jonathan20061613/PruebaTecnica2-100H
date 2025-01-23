import mongoose from 'mongoose';

// Esquema de Departamento
const departamentoSchema = new mongoose.Schema({
    codigo: { type: Number, required: true, unique: true },
    nombre: { type: String, required: true },
}, { timestamps: true });

// Pre-hook para asignar un código único incremental
departamentoSchema.pre('save', async function(next) {
    const maxDepartamento = await Departamento.findOne().sort({ codigo: -1 });  // Buscar el último código
    this.codigo = maxDepartamento ? maxDepartamento.codigo + 1 : 1;  // Si no hay, empieza en 1
    next();
});

export const Departamento = mongoose.model('Departamento', departamentoSchema);
