const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model{}

Tasks.init(
    { 
        //does this has to be the same as the mysql names?
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        task_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        task_note: {
            type: DataTypes.STRING, 
            allowNull: true, 
        },
    },
    {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: true,
        freezeTableName: true, 
        underscored: false,
        modelName: 'tasks'
        //giving modelname a name to reference in other areas of code
      }
 );
    
    
module.exports = Tasks; 