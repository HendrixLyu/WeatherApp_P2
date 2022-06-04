const express = require('express');
const router = new express.Router();
const weatherController = require('../../controllers/weather')

router.get('/weathers', weatherController.index666);
router.get('/weathers/:id', weatherController.show);
router.put('/weathers/:id', weatherController.update);
router.post('/weathers', weatherController.store);
router.delete('/weathers/:id', weatherController.delete);

module.exports=router;