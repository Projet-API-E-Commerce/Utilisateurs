import Sequelize from "sequelize";
import models from "../models/index.js";
import Role from "../models/role.model.js";

const {
	DATABASE_HOST,
	DATABASE_PORT,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE_DB,
	DATABASE_SYNCHRONIZE,
	DATABASE_DIALECT,
} = process.env;

class Database {
	sequelize = null;

	constructor() {}

	async connect() {
		try {
			this.sequelize = new Sequelize(
				DATABASE_DB,
				DATABASE_USER,
				DATABASE_PASSWORD,
				{
					dialect: DATABASE_DIALECT,
					port: DATABASE_PORT,
					host: DATABASE_HOST,
					ssl: true,
					dialectOptions: {
						ssl: {
							require: true,
							rejectUnauthorized: false,
						},
					},
					synchronize: DATABASE_SYNCHRONIZE,
					define: {
						timestamps: false,
					},
				}
			);

			await this.sequelize.authenticate();
			console.log("# DB Connection has been established successfully.");
		} catch (err) {
			throw err;
		}
	}

	async init() {
		Object.values(models).forEach((model) => {
			model.init(this.sequelize);
		});

		await this.sequelize.sync();

		Object.values(models)
			.filter((model) => typeof model.associate === "function")
			.forEach((model) => model.associate(models));
		Role.createDefaultRoles();
	}
}

export default new Database();
