import jwt from "jsonwebtoken";

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

const jwtService = {
	// NOTE - Générer un JWT pour un utilisateur
	generateToken(user) {
		const payload = { id: user.id, role: user.role };
		return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
	},

	// NOTE - Vérifier un JWT et renvoyer les données de l'utilisateur
	verifyToken(token) {
		try {
			const decoded = jwt.verify(token, JWT_SECRET);
			return { valid: true, user: decoded };
		} catch (error) {
			return { valid: false, error: error.message };
		}
	},
};

export default jwtService;
