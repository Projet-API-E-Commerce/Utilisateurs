import Role from "../models/role.model.js";

class RoleController {
	// NOTE - Créer un nouveau rôle
	async createRole(req, res) {
		try {
			const newRole = await Role.create(req.body);
			return res.status(201).json(newRole);
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}

	// NOTE - Récupérer tous les rôles
	async getAllRoles(req, res) {
		try {
			const roles = await Role.findAll();
			return res.status(200).json(roles);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Récupérer un rôle par son ID
	async getRoleById(req, res) {
		try {
			const role = await Role.findByPk(req.params.id);

			if (!role) {
				return res.status(404).json({ message: "Rôle non trouvé" });
			}

			return res.status(200).json(role);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Mettre à jour un rôle
	async updateRole(req, res) {
		try {
			const [updated] = await Role.update(req.body, {
				where: { id: req.params.id },
			});

			if (!updated) {
				return res.status(404).json({ message: "Rôle non trouvé" });
			}

			const updatedRole = await Role.findByPk(req.params.id);
			return res.status(200).json(updatedRole);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}

	// NOTE - Supprimer un rôle
	async deleteRole(req, res) {
		try {
			const deleted = await Role.destroy({
				where: { id: req.params.id },
			});

			if (!deleted) {
				return res.status(404).json({ message: "Rôle non trouvé" });
			}

			return res.status(200).json({ message: "Rôle supprimé" });
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
}

export default new RoleController();
