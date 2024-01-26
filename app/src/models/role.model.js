import { Model, DataTypes } from "sequelize";

class Role extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
				},
				label: {
					allowNull: false,
					type: DataTypes.STRING(30),
					unique: true,
				},
			},
			{
				sequelize,
			}
		);
	}

	static associate({ User }) {
		Role.hasMany(User, { foreignKey: "roleId", as: "users" });
		// Un rôle peut être associé à plusieurs utilisateurs
	}

	static async createDefaultRoles() {
		try {
			const rolesToCreate = [{ label: "ADMIN" }, { label: "CLIENT" }];

			// Parcourez la liste et créez chaque rôle s'il n'existe pas
			for (const roleData of rolesToCreate) {
				const [role, created] = await this.findOrCreate({
					where: { label: roleData.label },
				});
				if (created) {
					console.log(`Role '${role.label}' créé.`);
				}
			}
			console.log("Initialisation des rôles terminée.");
		} catch (error) {
			console.error("Erreur lors de l'initialisation des rôles :", error);
		}
	}
}

export default Role;
