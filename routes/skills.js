var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
 var skillsCtrl = require('../controllers/skills');


 // All actual paths start with "/skills"


 // GET Route /skills 
 router.get('/', skillsCtrl.index); 
 router.get('/new', skillsCtrl.new); 
 router.get('/:id', skillsCtrl.show);
 router.post('/', skillsCtrl.create);
 router.delete('/:id', skillsCtrl.delete);

module.exports = router;
