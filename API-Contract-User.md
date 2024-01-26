## Contrat d'Interfaces API

### Utilisateurs (Users)

#### 1. Créer un Utilisateur

- **URL** : `/users`
- **Méthode** : `POST`
- **Body** :
  ```json
  {
  	"last_name": "Doe",
  	"first_name": "John",
  	"address": "123 Main St",
  	"mail": "john.doe@example.com",
  	"phone": "1234567890",
  	"password": "password123"
  }
  ```
- **Réponses** :
  - **201 Created** :
    ```json
    {
    	"id": 1,
    	"last_name": "Doe",
    	"first_name": "John",
    	"address": "123 Main St",
    	"mail": "john.doe@example.com",
    	"phone": "1234567890"
    }
    ```
  - **400 Bad Request** : Si des données sont manquantes ou invalides.
  - **500 Internal Server Error** : Erreur serveur.

#### 2. Récupérer Tous les Utilisateurs

- **URL** : `/users`
- **Méthode** : `GET`
- **Réponses** :
  - **200 OK** :
    ```json
    [
    	{
    		"id": 1,
    		"last_name": "Doe",
    		"first_name": "John",
    		"address": "123 Main St",
    		"mail": "john.doe@example.com",
    		"phone": "1234567890"
    	}
    ]
    ```
  - **500 Internal Server Error** : Erreur serveur.

#### 3. Récupérer un Utilisateur par ID

- **URL** : `/users/:id`
- **Méthode** : `GET`
- **Paramètres URL** : `id` (ID de l'utilisateur)
- **Réponses** :
  - **200 OK** :
    ```json
    {
    	"id": 1,
    	"last_name": "Doe",
    	"first_name": "John",
    	"address": "123 Main St",
    	"mail": "john.doe@example.com",
    	"phone": "1234567890"
    }
    ```
  - **404 Not Found** : Utilisateur non trouvé.
  - **500 Internal Server Error** : Erreur serveur.

#### 4. Mettre à Jour un Utilisateur

- **URL** : `/users/:id`
- **Méthode** : `PUT`
- **Paramètres URL** : `id` (ID de l'utilisateur)
- **Body** :
  ```json
  {
  	"last_name": "Doe",
  	"first_name": "Jane",
  	"address": "123 Main St",
  	"mail": "jane.doe@example.com",
  	"phone": "1234567890"
  }
  ```
- **Réponses** :
  - **200 OK** :
    ```json
    {
    	"id": 1,
    	"last_name": "Doe",
    	"first_name": "Jane",
    	"address": "123 Main St",
    	"mail": "jane.doe@example.com",
    	"phone": "1234567890"
    }
    ```
  - **400 Bad Request** : Si des données sont manquantes ou invalides.
  - **404 Not Found** : Utilisateur non trouvé.
  - **500 Internal Server Error** : Erreur serveur.

#### 5. Supprimer un Utilisateur

- **URL** : `/users/:id`
- **Méthode** : `DELETE`
- **Paramètres URL** : `id` (ID de l'utilisateur)
- **Réponses** :
  - **200 OK** :
    ```json
    {
    	"message": "Utilisateur supprimé"
    }
    ```
  - **404 Not Found** : Utilisateur non trouvé.
  - **500 Internal Server Error** : Erreur serveur.

---

### Rôles (Roles)

#### 1. Créer un Rôle

- **URL** : `/roles`
- **Méthode** : `POST`
- **Body** :
  ```json
  {
  	"label": "ADMIN"
  }
  ```
- **Réponses** :
  - **201 Created** :
    ```json
    {
    	"id": 1,
    	"label": "ADMIN"
    }
    ```
  - **400 Bad Request** : Si des données sont manquantes ou invalides.
  - **500 Internal Server Error** : Erreur serveur.

#### 2. Récupérer Tous les Rôles

- **URL** : `/roles`
- **Méthode** : `GET`
- **Réponses** :
  - **200 OK** :
    ```json
    [
    	{
    		"id": 1,
    		"label": "ADMIN"
    	}
    ]
    ```
  - **500 Internal Server Error** : Erreur serveur.

---

### Authentification et Vérification de Token

#### 1. Authentification (Login)

- **URL** : `/auth`
- **Méthode** : `POST`
- **Body** :
  ```json
  {
  	"mail": "john.doe@example.com",
  	"password": "password123"
  }
  ```
- **Réponses** :
  - **200 OK** :
    ```json
    {
    	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
  - **401 Unauthorized** : Identifiants invalides.
  - **500 Internal Server Error** : Erreur serveur.

#### 2. Vérification de Token

- **URL** : `/verify-token`
- **Méthode** : `POST`
- **Body** :
  ```json
  {
  	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Réponses** :
  - **200 OK** :
    ```json
    {
    	"valid": true,
    	"user": {
    		"id": 1,
    		"role": "ADMIN"
    	}
    }
    ```
  - **403 Forbidden** : Token invalide.
  - **500 Internal Server Error** : Erreur serveur.
