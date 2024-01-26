import { Model, DataTypes } from "sequelize";
import bcrypt from "bcrypt";

class User extends Model {
	static init(sequelize) {
		return super.init(
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: DataTypes.INTEGER,
				},
				last_name: {
					allowNull: false,
					type: DataTypes.STRING(30),
				},
				first_name: {
					allowNull: false,
					type: DataTypes.STRING(30),
				},
				address: {
					allowNull: false,
					type: DataTypes.STRING(100),
				},
				mail: {
					allowNull: false,
					type: DataTypes.STRING(100),
					unique: true,
				},
				phone: {
					allowNull: false,
					type: DataTypes.STRING(20),
					unique: true,
				},
				password: {
					allowNull: false,
					type: DataTypes.STRING,
				},
				roleId: {
					allowNull: false,
					type: DataTypes.INTEGER,
					references: {
						model: "Roles",
						key: "id",
					},
				},
			},
			{
				sequelize,
				hooks: {
					beforeCreate: async (user) => {
						if (user.password) {
							const salt = await bcrypt.genSalt(10);
							user.password = await bcrypt.hash(user.password, salt);
						}
					},
					beforeUpdate: async (user) => {
						if (user.password) {
							const salt = await bcrypt.genSalt(10);
							user.password = await bcrypt.hash(user.password, salt);
						}
					},
				},
			}
		);
	}

	static associate({ Role }) {
		User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
		// Un utilisateur peut avoir un seul rôle
	}

	async validPassword(password) {
		return await bcrypt.compare(password, this.password);
	}
}

export default User;
