# Utilisez une image Node.js comme base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et yarn.lock
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port 3000 utilisé par l'application React
EXPOSE 3000

# Commande pour démarrer l'application React
CMD ["npm", "start"]
