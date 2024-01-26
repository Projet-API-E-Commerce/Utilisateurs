import User from "../models/user.model.js";
import jwtService from "../services/jwt.service.js";

class AuthController {
	async login(req, res) {
		try {
			const { email, password } = req.body;

			// NOTE - Trouver l'utilisateur par email
			const user = await User.findOne({ where: { email } });
			if (!user) {
				return res.status(401).json({ message: "Authentification échouée" });
			}

			// NOTE - Vérifier le mot de passe
			const validPassword = await user.validPassword(password);
			if (!validPassword) {
				return res.status(401).json({ message: "Authentification échouée" });
			}

			// NOTE - Générer un token JWT
			const token = jwtService.generateToken(user);

			return res.status(200).json({ message: "Connexion réussie", token });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	async verifyToken(req, res) {
		try {
			const { token } = req.body;

			const result = jwtService.verifyToken(token);
			if (result.valid) {
				return res.status(200).json({ valid: true, user: result.user });
			} else {
				return res
					.status(401)
					.json({ valid: false, message: "Token invalide" });
			}
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
}

export default new AuthController();
