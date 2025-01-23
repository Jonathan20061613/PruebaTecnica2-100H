import { Empleado } from "../models/empleados.models.js";

// Obtener todos los empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener empleados', error });
    }
};

// Crear un nuevo empleado
export const crearEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = new Empleado(req.body);
        await nuevoEmpleado.save();
        res.status(201).json(nuevoEmpleado);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear empleado', error });
    }
};

// Actualizar un empleado por su código
export const actualizarEmpleado = async (req, res) => {
    const { codigo } = req.params;
    try {
        const empleadoActualizado = await Empleado.findOneAndUpdate({ codigo }, req.body, { new: true });
        if (!empleadoActualizado) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.status(200).json(empleadoActualizado);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar empleado', error });
    }
};

// Eliminar un empleado por su código
export const eliminarEmpleado = async (req, res) => {
    const { codigo } = req.params;
    try {
        const empleadoEliminado = await Empleado.findOneAndDelete({ codigo });
        if (!empleadoEliminado) return res.status(404).json({ message: 'Empleado no encontrado' });
        res.status(200).json({ message: 'Empleado eliminado', empleadoEliminado });
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar empleado', error });
    }
};
