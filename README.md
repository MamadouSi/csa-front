# Documentation du projet CSA Frontend

## Description
Le projet **csa-frontend** est une application frontend développée pour interagir avec le backend du système de gestion des étudiants (CSA). Il permet aux utilisateurs de visualiser, d'ajouter, de modifier et de supprimer des données relatives aux étudiants, aux formations, aux promotions, etc.

## Installation
Pour installer et exécuter l'application localement, suivez ces étapes :

1. Cloner le dépôt GitHub :
git clone <lien-du-dépôt>

2. Accéder au répertoire du projet :
cd csa-frontend

3. Installer les dépendances :
npm install

4. Lancer l'application :
npm start


L'application sera accessible à l'adresse `http://localhost:3000`.

## Fonctionnalités
- Affichage de la liste des étudiants avec leurs détails.
- Ajout, modification et suppression d'étudiants.
- Affichage de la liste des formations et des promotions.
- Gestion des utilisateurs et des rôles.

## Technologies utilisées
- React.js : Framework frontend JavaScript
- Axios : Bibliothèque HTTP pour effectuer des requêtes AJAX
- React Router : Gestion des routes dans l'application React
- Material-UI : Bibliothèque de composants React pour une interface utilisateur stylisée
- Context API : Gestion de l'état global de l'application
- ESLint : Linter JavaScript pour maintenir la qualité du code

## Structure du projet
```
csa-frontend/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── LoginForm.js
│ │ ├── EtudiantListe.js
│ │ └── ...
│ ├── Api/
│ │ ├── AuthContext.js
│ │ ├── axiosConfig.js
│ │ └── ...
│ ├── App.js
│ └── index.js
│
├── package.json
├── README.md
└── ...
````
