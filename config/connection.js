const sequelize = require("sequelize");
require("dotenv").config();

// Initialize a variable named sequelize to be used to store an instance of the sequelize object later.
let sequelize;

//Create a Sequelize instance based on the environment variables. If the JAWSDB_URL environment variable exists, it means the app is likely running in a production environment, and a remote MySQL database service (such as JawsDB) is being used. In this case, a new Sequelize instance is created using the JAWSDB_URL. If JAWSDB_URL is not set, it implies the app is running in a development environment using a local MySQL database.
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.SAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_Name,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;