const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeapp', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

const initializeDatabase = async () => {
  try {
    const [existingTables] = await sequelize.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
    
    if (existingTables && existingTables.length > 0) {
      const existingTableNames = existingTables.map(table => table.table_name);

      const requiredTables = ['Empleado', 'Usuario', 'Solicitud'];

      const tablesMissing = requiredTables.filter(table => !existingTableNames.includes(table));
      if (tablesMissing.length === 0) {
        console.log('Las tablas ya existen en la base de datos. No es necesario sincronizar.');
        return;
      }
    }
    await sequelize.sync();
    console.log('Base de datos y tablas sincronizadas correctamente');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
};

module.exports = { sequelize, initializeDatabase };

