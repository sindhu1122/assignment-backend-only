'use strict';
module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define('Activity', {
    activity: DataTypes.STRING,
    startDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    userId: DataTypes.INTEGER
  }, {});
  Activity.associate = function(models) {
    // associations can be defined here
  };
  return Activity;
};