 
const router = require('expresss').Router(); 
const apiRoutes = require('./api'); 

router.use('/api', apiRoutes); 

module.exports = router; 