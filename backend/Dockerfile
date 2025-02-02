# Étape 1 : Utiliser une image officielle Node.js
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install && npm cache clean --force

# Étape 5 : Copier tout le code source
COPY . .

# Étape 6 : Exposer le port 3000
EXPOSE 3000

# Étape 7 : Démarrer l'application
CMD ["node", "src/app.js"]
