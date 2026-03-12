const { registerDonor, getDonorStats } = require('../Controllers/DonorController');
const ensureAuthenticated = require('../Middlewares/Auth');
const router = require('express').Router();

router.post('/register', ensureAuthenticated, registerDonor);
router.get('/stats', getDonorStats);

module.exports = router;
