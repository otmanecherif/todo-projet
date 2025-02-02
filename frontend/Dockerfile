# Étape 2 : Utiliser une image Nginx pour servir les fichiers
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire nginx/html
COPY resultat /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
