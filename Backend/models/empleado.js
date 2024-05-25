const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const Empleado = sequelize.define('Empleado',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_ingreso: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        salario: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'Empleado', // Nombre de la tabla en la base de datos
        freezeTableName: true,
        timestamps: false // Evitar que Sequelize pluralice automáticamente el nombre de la tabla
    }
);

module.exports = Empleado;
