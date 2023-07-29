// File: migrations/<timestamp>-create_categories_table.ts

//import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subcategories: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categories");
  },
};
















// "use strict";

// /** @type {import('sequelize-cli').Migration} */
// import { DataTypes } from 'sequelize';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//     await queryInterface.createTable("categories", {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       category_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       subcategories: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       createdAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//       },
//       updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
//       },
//       image: {
//         type: DataTypes.BLOB,
//         allowNull: true,
//       },
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   },
// };
