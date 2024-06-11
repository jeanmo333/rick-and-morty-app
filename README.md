
## Rick and Morty App

Esta es una aplicación web para explorar información sobre los personajes de la serie animada "Rick and Morty". La aplicación consume datos de la API de Rick and Morty y muestra una lista de personajes, detalles de cada personaje y filtros por estado y especie. Se puede correr la aplicación en desarrollo desde el contenedor docker o desde el ambiente vite que viene por defecto


## Pasos para contenedor docker

1. Clonar el repositorio `git clone <url del repositorio>`

2. Instalar dependencias  `npm install`

3. Crear el imagen de docker de la app y correr el contenedor a base del archivo docker-compose
`docker-compose up --build` con este comando puede hacer cambios en el codigo fuente y van a reflejar dentro del contenedor docker, gracias al puente que hay entre el codigo fuente y el contenedor docker en el archivo docker-compose.

4. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost:5173` 


