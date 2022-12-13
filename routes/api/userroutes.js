const router = require('express').Router();
const {user} = require('.../models'); 

router.post('/login', async(req, res) => {
  try {
    const const userData = await User.create(req.body);

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
  }
})

