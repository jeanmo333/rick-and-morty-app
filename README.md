
## Rick and Morty App

Esta es una aplicación web para explorar información sobre los personajes de la serie animada "Rick and Morty". La aplicación consume datos de la API de Rick and Morty y muestra una lista de personajes, detalles de cada personaje y filtros por estado y especie. Se puede correr la aplicación en desarrollo desde el contenedor docker o desde el ambiente vite que viene por defecto


## Pasos para contenedor docker en DEV

1. Clonar el repositorio `git clone <url del repositorio>`

2. Instalar dependencias  `npm install`

3. Crear el imagen de docker de la app y correr el contenedor en DEV con el archivo docker-compose.dev
`docker-compose -f docker-compose.dev.yml up --build` tambien se puede hacer de manera detached `docker-compose -f docker-compose.dev.yml up --build -d` con este comando puede hacer cambios en el codigo fuente y van a reflejar dentro del contenedor docker, gracias al puente que hay entre el codigo fuente y el contenedor docker en el archivo docker-compose.

4. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost:5173` 





## Pasos para contenedor docker en PROD

1. Clonar el repositorio `git clone <url del repositorio>`

2. Instalar dependencias  `npm install`

3. Crear el imagen de docker de la app y correr el contenedor en PROD con el archivo docker-compose.prod `docker-compose -f docker-compose.prod.yml up --build` , tambien se puede hacer de manera detached `docker-compose -f docker-compose.prod.yml up --build -d`

4. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost` o `http://<ip del servidor>`


