# Étape 1 : Utiliser une image officielle Node.js (v20) avec npm
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install -g @ionic/cli && npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port utilisé par le serveur de développement Ionic (par défaut 5173 pour Vite ou 8100 pour Ionic)
EXPOSE 8100

# Commande par défaut : lancer le serveur de développement Ionic
CMD ["ionic", "serve", "--host=0.0.0.0", "--port=8100"]
