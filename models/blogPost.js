// Import two specific components of the sequelize library: 1. the model. 2. the datatypes. 
const { Model, DataTypes } = require('sequelize');
// The Model class is the core building block for creating your database schema with Sequelize. You will extend this class to define your own custom models, which represent the structure and behavior of the tables in your database. Each model represents a table and includes the columns, data types, relationships, and other constraints necessary for that table.
// The DataTypes object is a collection of data types provided by Sequelize to define the columns in your models. These data types help ensure that your database stores the correct type of data in each column, and they also help Sequelize understand how to map JavaScript data types to the appropriate database data types. Some common DataTypes include STRING, INTEGER, BOOLEAN, DATE, and FLOAT.
const sequelize = require('../config/connection')

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    post_content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    creator_username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  //configuration options.
  {
    sequelize,
    freezeTableName: true, //When this property is set to true, Sequelize will use the model name as the table name in the database without modifying it. In this case, since the modelName is 'blogPost', Sequelize will use 'gallery' as the table name instead of the default pluralized form, 'blogPosts'.
    underscored: true, //When this property is set to true, Sequelize will use snake_case (underscores) instead of camelCase for auto-generated column names and foreign key constraints. e.g., if you have a column called createdAt, Sequelize would create it as created_at in the database when underscored is set to true.
    modelName: "blogPosts",
  }
);

module.exports = BlogPost;