const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { nftService} = require('../services');



const create_nft = catchAsync(async (req, res) => { 
    const nftObject=req.body;
    const nfts=await nftService.create_nft(nftObject,req,res);
    
 
    downloadName = `${Date.now()}.zip`
 
    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${downloadName}`);
    res.set('Content-Length',nfts.length);
    
    res.status(httpStatus.OK).send(nfts);
});



module.exports={
    create_nft
};