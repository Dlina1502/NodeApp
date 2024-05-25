const express = require('express');
const { sequelize, initializeDatabase } = require('./config/sequelize');
const empleadoRouter = require('./routes/empleadoRoutes');
const solicitudRouter = require('./routes/solicitudRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes'); // Rutas de autenticación
const app = express();

// Asegurar que la base de datos se sincronice antes de autenticarse
initializeDatabase()
  .then(() => {
    // Autenticarse con Sequelize
    return sequelize.authenticate();
  })
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
    // Continuar con la configuración de las rutas y el servidor
    app.use(express.json());
    // Rutas de autenticación
    app.use('/api/auth', usuarioRoutes);
    // Rutas de empleado
    app.use('/api/employees', empleadoRouter);
    // Rutas de solicitud
    app.use('/api/solicitudes', solicitudRouter);

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al establecer conexión a la base de datos:', err);
  });
