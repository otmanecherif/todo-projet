Projet Todo List avec Docker et Kubernetes

Description:
Ce projet implémente une todo list avec un backend Node.js et un frontend Angular. Il utilise Docker pour la containerisation et Kubernetes pour l'orchestration des conteneurs. Le projet inclut également la gestion des tâches à travers un API backend et une interface utilisateur simple en frontend.

Prérequis:
Avant de démarrer le projet, assurez-vous que vous avez les outils suivants installés :

- Docker
- Kubernetes
- Minikube
- Node.js
- Angular CLI

Installation:
1. Clonez le projet sur votre machine locale :
   git clone https://github.com/otmanecherif/prog-distrib.git
   cd prog-distrib

2. Construisez l'image Docker pour le frontend et le backend :

   Pour le backend :
   cd backend
   docker build -t todo-backend .

   Pour le frontend :
   cd frontend
   docker build -t todo-frontend .

3. Poussez les images sur Docker Hub (optionnel) :

   Pour le backend :
   docker push todo-backend

   Pour le frontend :
   docker push todo-frontend

Déploiement Kubernetes:
1. Créez un cluster Kubernetes local avec Minikube :
   minikube start

2. Déployez les services et les pods dans Kubernetes :
   kubectl apply -f k8s/

3. Vérifiez que les services sont correctement déployés :
   kubectl get pods
   kubectl get services

4. Accédez à l'application en utilisant Minikube :
   minikube service todo-frontend-service --url

Fonctionnalités:
- Backend :
  - API REST pour gérer les tâches (ajout, modification, suppression, récupération)
  - Utilise Node.js et Express
  - Stockage en mémoire (pas de base de données)

- Frontend :
  - Application Angular simple pour afficher et gérer les tâches
  - Communication avec l'API backend

Sécurisation:
Le cluster est sécurisé avec un certificat TLS pour protéger les communications entre les services et les utilisateurs.

