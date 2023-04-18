const sequelize = require('sequelize');
const seedBlogpost = require('./postData');
// const seed ... = require('');

// Sequelize.sync synchoronizes my db with the models defined in my app. Essentially, essentially creates or updates the necessary tables in the database based on your models' structure. The force option determines whether to recreate the tables if they already exist. By setting force: true in the sync method, instructs Sequelize to drop existing tables and recreate them based on the model definitions. useful in development and testing environments when you want to start with a clean slate and clear out any existing data in the database. Not recommended for production environment, as it will delete all the existing data and tables, potentially causing data loss.
const seedAll = async () => {
await sequelize.sync({ force: true }); // Remember to set to force: false when setting to production environment on Heroku!

    await seedBlogpost();

   // await //other seed.js function. 

    // Exits the process with a zero exit code (which typically means successful execution). 
    process.exit(0);
}

// Seed database with the initial data
seedAll();