const router = require('express').Router();
const bugController = require('../controllers/bugController');

router.post('/', bugController.createBug);
router.get('/', bugController.getBugs);
router.put('/:id', bugController.updateBug);
router.delete('/:id', bugController.deleteBug);

module.exports = router; 