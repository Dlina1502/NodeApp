const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudController');

// Rutas para solicitudes
router.get('/', solicitudesController.getAllSolicitudes);
router.post('/', solicitudesController.createSolicitud);
router.get('/:id', solicitudesController.getSolicitudById);
router.put('/:id', solicitudesController.updateSolicitud);
router.delete('/:id', solicitudesController.deleteSolicitud);

module.exports = router;
