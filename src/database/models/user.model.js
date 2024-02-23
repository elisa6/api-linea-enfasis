const { Model, DataTypes } = require('sequelize')

//Table name
const USER_TABLE = 'users'

//Table Schema
const UserSchema = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    areaId: {
        field: 'area_id',
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: "areas",
            key: 'id'
        }
    }
}

class User extends Model{
    static associate(models){
        // this.belongsTo(models.Area, {
        //     as: "area", foreignKey: 'area_id'
        // })
    }

    static config(sequelize){
        return {sequelize, tableName: USER_TABLE, modelName: 'User', timestamps: false}
    }
}

module.exports = {USER_TABLE, UserSchema, User}
