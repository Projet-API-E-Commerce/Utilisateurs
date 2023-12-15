# **Contrat d'API du Service Utilisateur**

#### **1. Structure du Contrat d'API**
- **Objectif :** Définit les normes pour interagir avec le service utilisateur.
- **Contenu :**
  - **Méthodes et URL :** Spécifie les méthodes (POST, GET, etc.) et les URL pour chaque type de requête.
  - **Paramètres :** Détaille les paramètres requis pour chaque requête.
  - **Réponses :** Explique les formats de réponse attendus et les codes d'erreur.

#### **2. Authentification**
- **But :** Sécuriser l'accès à l'application e-commerce.
- **Méthode :** Utilisation du JSON Web Token (JWT).

  - **Création de Compte**
    - **Endpoint :** `POST /users`
    - **Paramètres (Body) :** 
      - `nom`: "string"
      - `prenom`: "string"
      - `adresse_mail`: "string"
      - `telephone`: "string"
    - **Réponse en cas de succès :**
      - `userId`: "string"
      - `nom`: "string"
      - `prenom`: "string"
      - `adresse_mail`: "string"
      - `telephone`: "string"

  - **Authentification**
    - **Endpoint :** `POST /authenticate`
    - **Paramètres (Body) :** 
      - `username`: "string"
      - `password`: "string"
    - **Réponse en cas de succès :** 
      - `token`: "string"
      - `expiresIn`: "int"

  - **Vérification de JWT**
    - **Endpoint :** `POST /verifyToken`
    - **Paramètres (Body) :**
      - `token`: "string"
    - **Réponse en cas de succès :**
      - `userId`: "string"
      - `message`: "Token validé avec succès"
    - **Réponse en cas d'échec :**
      - `error`: "string"


#### **3. Modification d'Utilisateur**
- **Endpoint :** `PATCH /users/{id}`
- **En-tête Requis :** 
  - `Authorization`: "Bearer {token}"
- **Paramètres (Body) :** 
  - `nom`: "string"
  - `prenom`: "string"
  - `adresse_mail`: "string"
  - `telephone`: "string"
- **Réponse en cas de succès :** 
  - `message`: "Utilisateur modifié avec succès"

#### **4. Suppression d'Utilisateur**
- **Endpoint :** `DELETE /users/{id}`
- **En-tête Requis :** 
  - `Authorization`: "Bearer {token}"
- **Réponse en cas de succès :** 
  - `message`: "Utilisateur supprimé avec succès"

#### **5. Récupération d'un Utilisateur Spécifique**
- **Endpoint :** `GET /users/{id}`
- **Paramètres d'URL :** 
  - `id`: "string"
- **Réponse en cas de succès :** 
  - `userId`: "string"
  - `nom`: "string"
  - `prenom`: "string"
  - `adresse_mail`: "string"
  - `telephone`: "string"
