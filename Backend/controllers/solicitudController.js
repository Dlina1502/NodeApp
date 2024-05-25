const Solicitud = require('../models/solicitud');

async function getAllSolicitudes(req, res) {
  try {
    const solicitudes = await Solicitud.findAll();
    res.json(solicitudes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener solicitudes' });
  }
}

async function createSolicitud(req, res) {
  try {
    const newSolicitud = await Solicitud.create(req.body);
    res.json(newSolicitud);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear solicitud' });
  }
}

async function getSolicitudById(req, res) {
  const { id } = req.params;
  try {
    const solicitud = await Solicitud.findByPk(id);
    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(solicitud);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener solicitud' });
  }
}

async function updateSolicitud(req, res) {
  const { id } = req.params;
  try {
    const [updatedRowsCount, updatedSolicitudes] = await Solicitud.update(req.body, {
      where: { id },
      returning: true, // Devuelve el registro actualizado
    });
    if (updatedRowsCount === 0) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(updatedSolicitudes[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar solicitud' });
  }
}

async function deleteSolicitud(req, res) {
  const { id } = req.params;
  try {
    const deletedRowCount = await Solicitud.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json({ message: 'Solicitud eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar solicitud' });
  }
}

module.exports = {
  getAllSolicitudes,
  createSolicitud,
  getSolicitudById,
  updateSolicitud,
  deleteSolicitud,
};
