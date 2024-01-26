import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null) {
		return res.status(401).json({ message: "Pas de token, non autorisé" }); // Pas de token, non autorisé
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return res.status(403).json({ message: "Token invalide" }); // Token invalide
		}

		req.user = user; // Ajoute les données de l'utilisateur à l'objet de requête
		next(); // Passe au prochain middleware ou route
	});
};

export default {
	authenticateToken,
};
