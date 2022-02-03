const express = require('express');
const ratingController = require('../../controllers/rating.controller');

const router = express.Router();

router.get('/create_nft', ratingController.get_exp_rating);




module.exports = router;