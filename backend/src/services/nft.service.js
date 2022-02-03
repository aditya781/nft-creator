const {createNFT} = require('./layers.service');
const multer = require('multer');


//storage
const Storage = multer.diskStorage({
  destination:`${process.env.PWD}/../layers`,
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({
  storage:Storage
}).single('testImage')

const create_nft= async(nftObject)=>{
  
};

module.exports = { 
    create_nft
 };
