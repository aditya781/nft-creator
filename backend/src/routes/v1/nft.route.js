const express = require('express');
const nftController = require('../../controllers/nft.controller');

const router = express.Router();

router.get('/create_nft', nftController.create_nft);




module.exports = router;