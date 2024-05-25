const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');
const Empleado = require('./empleado');

const Solicitud = sequelize.define('Solicitud',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        resumen: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        id_empleado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Empleado,
                key: 'id'
            }
        }
    },
    {
        tableName: 'Solicitud', // Nombre de la tabla en la base de datos
        freezeTableName: true,
        timestamps: false // Evitar que Sequelize pluralice automáticamente el nombre de la tabla
    }
);

module.exports = Solicitud;


