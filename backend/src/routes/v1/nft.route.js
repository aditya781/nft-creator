const express = require('express');
const nftController = require('../../controllers/nft.controller');

const router = express.Router();

router.post('/create_nft', nftController.create_nft);




module.exports = router;