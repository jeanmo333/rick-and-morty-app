
## Rick and Morty App

Esta es una aplicación web para explorar información sobre los personajes de la serie animada - [Rick and Morty](https://rickandmortyapi.com). La aplicación consume datos de la API de Rick and Morty y muestra una lista de personajes, detalles de cada personaje y filtros por estado y especie. Se puede correr la aplicación en desarrollo desde el contenedor docker o desde el ambiente vite que viene por defecto


## Pasos para contenedor docker en DEV

1. Debe tener corriendo el docker desktop

2. Clonar el repositorio `git clone <url del repositorio>`

3. Instalar dependencias  `npm install`

4. Crear el imagen de docker de la app y correr el contenedor en DEV con el archivo docker-compose.dev
`docker-compose -f docker-compose.dev.yml up --build` tambien se puede hacer de manera detached `docker-compose -f docker-compose.dev.yml up --build -d` con este comando puede hacer cambios en el codigo fuente y van a reflejar dentro del contenedor docker, gracias al puente que hay entre el codigo fuente y el contenedor docker en el archivo docker-compose.

5. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost:5173` 




## Pasos para contenedor docker en PROD

1. Debe tener corriendo el docker desktop

2. Clonar el repositorio `git clone <url del repositorio>`

3. Instalar dependencias  `npm install`

4. Crear el imagen de docker de la app y correr el contenedor en PROD con el archivo docker-compose.prod `docker-compose -f docker-compose.prod.yml up --build` , tambien se puede hacer de manera detached `docker-compose -f docker-compose.prod.yml up --build -d`

5. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost` o `http://<ip del servidor>`



## Pasos para ambiente vite DEV

1. Clonar el repositorio `git clone <url del repositorio>`

2. Nevegar a la carpeta del proyecto.

3. Instalar dependencias  `npm install`

4. Levantar la app `npm run dev`

5. Abrir una pestana de un navegador, copiar y pegar el siguiente url
`http://localhost:5173`





## Tecnologías Utilizadas

- [React](https://reactjs.org/)

- [React Router DOM](https://reactrouter.com/)

- [TypeScript](https://www.typescriptlang.org/)

- [Vite](https://vitejs.dev/)

- [Tailwind CSS](https://tailwindcss.com/)

- [Axios](https://axios-http.com/)

- [Docker](https://www.docker.com/)





# Estructura del Proyecto - Arquitectura Limpia

El proyecto sigue los principios de la arquitectura limpia para mantener una separación clara de responsabilidades y facilitar la escalabilidad y mantenibilidad del código.

## Estructura de Carpetas

El proyecto está organizado en varias capas, cada una con su propia responsabilidad. A continuación se muestra la estructura de carpetas:

- **src/**
  - **application/**
    - **useCases/**: Define los casos de uso de la aplicación.
  - **domain/**
    - **models/**: Contiene las entidades del dominio.
  - **infrastructure/**
    - **api/**: Configuración y lógica relacionada con la API externa (por ejemplo, Axios).
    - **repositories/**: Implementaciones de los repositorios definidos en la capa de aplicación.
    - **sources/**: Configuraciones y adaptadores de api externas(ejemplo: axios, etc...).
  - **presentation/**
    - **components/**: componentes de la interfaz de usuario que se puede usar las paginas o otros componentes.
    - **routes/**: Configuración de las rutas de la aplicación (por ejemplo, React Router dom).
    - **pages/**: Vistas de la interfaz de usuario (por ejemplo, páginas React).
    - **utils/**: funciones de utilidades

  
## Descripción de Carpetas

- **application/**: Contiene la lógica de aplicación, incluyendo casos de uso que definen las acciones que puede realizar la aplicación.
- **domain/**: Contiene las entidades del dominio que representan los conceptos principales de la aplicación.
- **infrastructure/**: Contiene la lógica de infraestructura, como la implementación de repositorios y la configuración de la API externa.
- **presentation/**: Contiene la interfaz de usuario de la aplicación, incluyendo componentes, rutas, utilidades y vistas.

## Ventajas de la Arquitectura Limpia

- **Separación de Responsabilidades**: Cada capa tiene un propósito claro y está separada de las demás, lo que facilita el mantenimiento y la escalabilidad.
- **Testabilidad**: La separación de las capas permite una fácil escritura de pruebas unitarias y de integración.
- **Flexibilidad**: La estructura modular permite cambios en una capa sin afectar a otras partes del sistema.

## Consideraciones Adicionales

- Se puede utilizar un patrón de inyección de dependencias para conectar las distintas capas de la aplicación.
- La comunicación entre las capas se realiza a través de interfaces, lo que permite la sustitución de implementaciones sin modificar el código existente.