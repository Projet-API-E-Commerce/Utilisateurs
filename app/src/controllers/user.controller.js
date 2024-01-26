import User from "../models/user.model.js";
import Role from "../models/role.model.js";

class UserController {
	// NOTE - Créer un nouvel utilisateur avec le rôle 'CLIENT' par défaut
	async createUser(req, res) {
		try {
			const roleClient = await Role.findOne({ where: { label: "CLIENT" } });
			if (!roleClient) {
				return res.status(404).json({ message: "Rôle 'CLIENT' non trouvé" });
			}

			const newUser = await User.create({ ...req.body, roleId: roleClient.id });
			return res.status(201).json(newUser);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}

	// NOTE - Récupérer tous les utilisateurs
	async getAllUsers(req, res) {
		try {
			const users = await User.findAll({
				include: [
					{
						model: Role,
						as: "role",
					},
				],
			});
			return res.status(200).json(users);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Récupérer un utilisateur par son ID
	async getUserById(req, res) {
		try {
			const user = await User.findByPk(req.params.id, {
				include: [
					{
						model: Role,
						as: "role",
					},
				],
			});

			if (!user) {
				return res.status(404).json({ message: "Utilisateur non trouvé" });
			}

			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Mettre à jour un utilisateur
	async updateUser(req, res) {
		try {
			const [updated] = await User.update(req.body, {
				where: { id: req.params.id },
			});

			if (!updated) {
				return res.status(404).json({ message: "Utilisateur non trouvé" });
			}

			const updatedUser = await User.findByPk(req.params.id, {
				include: [
					{
						model: Role,
						as: "role",
					},
				],
			});

			return res.status(200).json(updatedUser);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Supprimer un utilisateur
	async deleteUser(req, res) {
		try {
			const deleted = await User.destroy({
				where: { id: req.params.id },
			});

			if (!deleted) {
				return res.status(404).json({ message: "Utilisateur non trouvé" });
			}

			return res.status(200).json({ message: "Utilisateur supprimé" });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
}

export default new UserController();
