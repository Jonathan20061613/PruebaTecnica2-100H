import { Departamento } from "../models/departamentos.models.js";

// Obtener todos los departamentos
export const obtenerDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.find();
        if (departamentos.length === 0) {
            return res.status(404).json({ message: 'No hay departamentos almacenados' });
        }
        res.status(200).json(departamentos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener departamentos', error });
    }
};

// Crear un nuevo departamento
export const crearDepartamento = async (req, res) => {
    try {
        const nuevoDepartamento = new Departamento(req.body);
        await nuevoDepartamento.save();
        res.status(201).json(nuevoDepartamento);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear departamento', error });
    }
};

// Actualizar un departamento por su código
export const actualizarDepartamento = async (req, res) => {
    const { codigo } = req.params;
    try {
        const departamentoActualizado = await Departamento.findOneAndUpdate({ codigo }, req.body, { new: true });
        if (!departamentoActualizado) return res.status(404).json({ message: 'Departamento no encontrado' });
        res.status(200).json(departamentoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar departamento', error });
    }
};

// Eliminar un departamento por su código
export const eliminarDepartamento = async (req, res) => {
    const { codigo } = req.params;
    try {
        const departamentoEliminado = await Departamento.findOneAndDelete({ codigo });
        if (!departamentoEliminado) return res.status(404).json({ message: 'Departamento no encontrado' });
        res.status(200).json({ message: 'Departamento eliminado', departamentoEliminado });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar departamento', error });
    }
};
