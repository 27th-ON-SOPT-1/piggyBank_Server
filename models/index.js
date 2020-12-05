const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user")(sequelize, Sequelize);
db.Product = require("./product")(sequelize, Sequelize);
db.Bank = require("./bank")(sequelize, Sequelize);

db.User.hasMany(db.Bank, { onDelete: "cascade" });
db.Bank.belongsTo(db.User);

module.exports = db;
