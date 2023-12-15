<h2>Structure du Contrat d'API</h2>
<p>
Ce contrat d'API définit les normes et les spécifications pour l'interaction avec le service utilisateur. Il détaille les méthodes, les URL, et les paramètres requis pour chaque type de requête, garantissant ainsi une intégration fluide et efficace avec d'autres micro-services ou avec le front-end de l'application. Le contrat inclut également les formats de réponse attendus et les protocoles d'erreur, permettant aux développeurs de gérer efficacement les interactions avec le service.
</p>
<h2>But de l'Authentification</h2>
<p>
L'authentification est un composant crucial de notre service utilisateur. Elle vise à sécuriser l'accès à l'application e-commerce en vérifiant l'identité des utilisateurs. Pour cela, nous utilisons le JSON Web Token (JWT), un standard ouvert (RFC 7519) qui permet d'échanger des informations de manière sécurisée entre parties prenantes.
</p>
<h3>Création de Compte</h3>
Endpoint de Création de Compte: <br> <code>POST /users</code>
<h4>Paramètres de Corps (Body) pour Création de Compte : </h4>
<code>{<br>
    "nom": "string", <br>
    "prenom": "string", <br>
    "adresse_mail": "string", <br>
    "telephone": "string" <br>
}</code> <br>
<h4>Réponse en cas de succès pour Création de Compte : </h4>
<code>{<br>
    "userId": "string", <br>
    "message": "Utilisateur créé avec succès" <br>
}</code> <br>
<h3>Authentification avec JWT</h3>
Endpoint d'Authentification: <br> <code>POST /authenticate</code>
<h4>Paramètres de Corps (Body) pour Authentification : </h4>
<code>{<br>
    "username": "string", <br>
    "password": "string" <br>
}</code> <br>
<h4>Paramètres de Réponse (Response) pour Authentification : </h4>
<code>{<br>
    "token": "string", <br>
    "expiresIn": "int" <br>
}</code> <br>
<h4>Réponse en cas d'échec pour Authentification : </h4>
<code>{<br>
    "error": "string" <br>
}</code> <br>


<h2>Modification d'Utilisateur</h2>
Endpoint de Modification d'Utilisateur: <br> <code>PATCH /users/{id}</code>
<h4>En-tête Requis pour Modification :</h4>
<code>Authorization: Bearer {token}</code><br>
<h4>Paramètres de Corps (Body) pour Modification : </h4>
<code>{<br>
    "nom": "string", <br>
    "prenom": "string", <br>
    "adresse_mail": "string", <br>
    "telephone": "string" <br>
}</code> <br>
<h4>Réponse en cas de succès pour Modification : </h4>
<code>{<br>
    "message": "Utilisateur modifié avec succès" <br>
}</code> <br>
<h4>Réponse en cas d'échec pour Modification : </h4>
<code>{<br>
    "error": "string" <br>
}</code> <br>

<h2>Suppression d'Utilisateur</h2>
Endpoint de Suppression d'Utilisateur: <br> <code>DELETE /users/{id}</code>
<h4>En-tête Requis pour Suppression :</h4>
<code>Authorization: Bearer {token}</code><br>
<h4>Réponse en cas de succès pour Suppression : </h4>
<code>{<br>
    "message": "Utilisateur supprimé avec succès" <br>
}</code> <br>
<h4>Réponse en cas d'échec pour Suppression : </h4>
<code>{<br>
    "error": "string" <br>
}</code> <br>


<h2>Récupération d'un Utilisateur Spécifique</h2>
Endpoint de Récupération d'un Utilisateur Spécifique: <br> <code>GET /users/{id}</code>
<h4>Paramètres d'URL pour Récupération :</h4>
<code>{<br>
    "id": "string" <br>
}</code> <br>
<h4>Réponse en cas de succès pour Récupération : </h4>
<code>{<br>
    "userId": "string", <br>
    "nom": "string", <br>
    "prenom": "string", <br>
    "adresse_mail": "string", <br>
    "telephone": "string" <br>
}</code> <br>
<h4>Réponse en cas d'échec pour Récupération : </h4>
<code>{<br>
    "error": "string" <br>
}</code> <br>