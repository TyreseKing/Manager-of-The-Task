const router = require('express').Router();
const sequelize = require('.../config/connection.js');
const { id, task_name, task_type, task_note } = require('.../models');


//get all tasks
