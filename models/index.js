const User = require('./User');
const Tasks = require('./tasks');

User.hasMany(Tasks, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tasks.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tasks };
