let express = require('express');
let router = express.Router();
const gatosController = require ('../controllers/gatosController');
router.post('/', gatosController.addGatos);

router.put('/:id', gatosController.updateGatos)
router.delete('/:id', gatosController.deleteGatos);




module.exports = router