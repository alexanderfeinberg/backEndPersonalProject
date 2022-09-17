'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(
        models.Campaign,
        {foreignKey:'userId'}
      )
    }
  }
  User.init({
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isAlphanumeric:true
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isValid(password){
          if(password.length < 8){
            throw new Error("Password must be at least 8 characters long.")
          }
        }
      }
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
