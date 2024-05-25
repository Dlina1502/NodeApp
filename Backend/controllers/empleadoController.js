
const { Empleado } = require('../models/empleado');

async function getAllEmployees(req, res) {
  try {
    const employees = await Empleado.findAll();
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
}

async function createEmployee(req, res) {
  try {
    const newEmployee = await Empleado.create(req.body);
    res.json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear empleado' });
  }
}

async function getEmployeeById(req, res) {
  const { id } = req.params;
  try {
    const employee = await Empleado.findByPk(id);
    if (!employee) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener empleado' });
  }
}

async function updateEmployee(req, res) {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedEmployees] = await Empleado.update(req.body, {
      where: { id },
      returning: true, // Devuelve el registro actualizado
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json(updatedEmployees[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
}

async function deleteEmployee(req, res) {
  const { id } = req.params;
  try {
    const deletedRowCount = await Empleado.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.json({ message: 'Empleado eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar empleado' });
  }
}

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
