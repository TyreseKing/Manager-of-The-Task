const router = require('express').Router();
const sequelize = require('../../config/connection');
const {user} = require('.../models'); 

router.get('/', async(req, res) => {
    try{
        const userData = await user.findAll({
            include: [{ model: user}], 
            attributes: {
                include: [
                    [
                        sequalize.literal(
                            '(SELECT COUNT(*) FROM ' 
                        )
                    ]
                ]
            }
        })
    }
})

