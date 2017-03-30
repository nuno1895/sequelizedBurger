//for sequelize

"use strict";

module.exports = function(sequelize, DataTypes) {
   var Burger = sequelize.define("Burger", {
       burger_name: DataTypes.STRING,
       devoured: DataTypes.BOOLEAN,
       created_at: DataTypes.NOW
   }, {
       timestamps: true,
       updatedAt: false,
       underscored: true,
       freezeTableName: true,
       tableName: "burgers"
   });

   return Burger;
};