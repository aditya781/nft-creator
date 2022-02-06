const {createNFT} = require('./layers.service');
const multer = require('multer');


//storage
//${process.env.PWD}/../layers
const Storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public');
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname);
  }
});

const upload = multer({
  storage:Storage
}).single('back')

const create_nft= async(nftObject,req,res)=>{
  console.log(nftObject)
  upload(req,res,(err)=>{
    if(err){
      console.log("error= "+ err)
    }
    console.log("success")
  })
  
};

module.exports = { 
    create_nft
 };
