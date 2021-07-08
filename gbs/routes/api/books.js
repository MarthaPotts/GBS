const router = require('express').Router(); 
const booksRoutes = require('../../controllers/booksRoutes'); 

router.route('/')
.get(booksRoutes.findAll)
.post(booksRoutes.create); 

router.route('/:id')
.get(booksRoutes.findById)
.put(booksRoutes.update)
.delete(booksRoutes.remove); 

module.exports = router; 
