<<<<<<< HEAD
# NodeApp
=======

# Instrucciones para ejecutar la aplicación

Esta aplicación consta de un frontend en React, un backend en Node.js, y una base de datos PostgreSQL. Utilizamos Docker Compose para facilitar su ejecución.

## Requisitos previos

- Docker: Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo e instalarlo desde [aquí](https://www.docker.com/products/docker-desktop).
- Docker Compose: Docker Desktop ya incluye Docker Compose, pero si tienes una instalación separada de Docker, verifica que también tengas Docker Compose instalado. 

## Pasos para ejecutar la aplicación

1. **Clona el repositorio**

   Clona este repositorio en tu máquina local usando el siguiente comando:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Configura las variables de entorno**

   Asegúrate de que las variables de entorno necesarias estén configuradas correctamente. En el archivo `.env` adjunto, debes modificar el nombre de usuario y la contraseña de tu servidor PostgreSQL.

   Abre el archivo `.env` y edita las siguientes líneas con tus propios valores:
   ```
   POSTGRES_USER=tu_usuario
   POSTGRES_PASSWORD=tu_contraseña
   ```

   Este archivo `.env` debe estar en la raíz del proyecto, junto al archivo `docker-compose.yml`.

3. **Construye y levanta los contenedores**

   Ejecuta el siguiente comando para construir las imágenes de Docker y levantar los contenedores:
   ```sh
   docker-compose up --build
   ```

   Este comando hará lo siguiente:
   - Construirá la imagen del frontend a partir del contexto `./Frontend`.
   - Construirá la imagen del backend a partir del contexto `./Backend`.
   - Levantará un contenedor para PostgreSQL utilizando la imagen `postgres:16` y ejecutará el script de inicialización `init.sql`.

4. **Accede a la aplicación**

   Una vez que los contenedores estén en funcionamiento, puedes acceder a la aplicación:

   - **Frontend**: Abre tu navegador y ve a `http://localhost:3000`.
   - **Backend**: La API del backend estará disponible en `http://localhost:3001`.
   - **Base de datos**: PostgreSQL estará disponible en `localhost:5433`.

5. **Detener los contenedores**

   Para detener y eliminar los contenedores, ejecuta:
   ```sh
   docker-compose down
   ```

## Nota

- Si haces cambios en el código del frontend o backend, deberás reconstruir las imágenes ejecutando `docker-compose up --build` nuevamente.
- Los datos de la base de datos se persistirán en un volumen de Docker (`db-data`). Si deseas eliminar estos datos, puedes eliminar el volumen con `docker volume rm tu-repositorio_db-data`.
```
>>>>>>> 15249eb00b6c47095cd004e988a6352d134e430d
