
# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias del proyecto
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación.
COPY . .

# Crear la aplicación (opcional si es necesario para Vite)
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 5173

# Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev"]

