'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    activity: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    userId: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};