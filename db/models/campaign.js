'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campaign.belongsTo(
        models.User,
        {foreignKey:'userId', onDelete:'CASCADE'}
      )
    }
  }
  Campaign.init({
    campaignName: DataTypes.STRING,
    totalActions: DataTypes.INTEGER,
    totalDays: DataTypes.INTEGER,
    captchaApiKey: DataTypes.STRING,
    proxy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};
