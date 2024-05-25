-- init.sql

-- Crear la base de datos
SELECT 'CREATE DATABASE nodeapp'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'nodeapp')\gexec

-- Conectar a la base de datos nodeapp
\c nodeapp;

-- Crear la tabla Empleado
CREATE TABLE Empleado (
    id SERIAL PRIMARY KEY,
    fecha_ingreso DATE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    salario FLOAT NOT NULL
);

-- Crear la tabla Solicitud
CREATE TABLE Solicitud (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    resumen VARCHAR(50) NOT NULL,
    id_empleado INTEGER NOT NULL,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id)
);

-- Crear la tabla Usuario
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL CHECK (rol IN ('admin', 'employee'))
);
