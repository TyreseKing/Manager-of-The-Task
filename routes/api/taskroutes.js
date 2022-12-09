const router = require('express').Router();
const sequelize = require('.../config/connection.js');
const { id, task_name, task_type, task_note } = require('.../models');
const Tasks = require('../../models/tasks');


//get all tasks
router.get('/task', async(req,res)=> {
   try {const taskData = await Tasks.findAll({
    include: [{model: Tasks}],
    attributes: {
        include: [
            [
                sequelize.literal(
                    '(SELECT '
                ),
                'tasks,'
            ],
        ],
    },
   });
   res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  
  // GET a single driver
  router.get('/task:id', async (req, res) => {
    try {
      const taskData = await Tasks.findByPk(req.params.id, {
        include: [{ model: Tasks }],
        attributes: {
          include: [
            [
              // Use plain SQL to add up the total mileage
              sequelize.literal(
                '(SELECT task_name, task_type, task,notes FROM task WHERE task.id = task.id)'
              ),
              'tasks',
            ],
          ],
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that id!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  