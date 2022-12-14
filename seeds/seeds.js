const sequelize = require('../config/connection');
const { User, Tasks } = require('../models');

const userData = require('./userData.json');
const taskData = require('./TaskData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


    await Tasks.bulkCreate(taskData, {
      individualHooks: true,
      returning: true,
    });
  

  process.exit(0);
};

seedDatabase();