const {createNFT} = require('./layers.service');
const multer = require('multer');
const {manage_dir, remove} = require('./dir_man.service')
const fsa = require("fs-extra");
const AdmZip = require('adm-zip');

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
}).array('back',100)

const create_nft= async(nftObject,req,res)=>{
  
  upload(req,res,(err)=>{
    if(err){
      console.log("error= "+ err)
    }
    console.log("success")
  })
  if(nftObject){
    console.log(nftObject)
    await manage_dir(nftObject);
    await createNFT(nftObject);

   /* const zip = new AdmZip();
    let uploadDir = fsa.readdirSync("build");
    for(let i=0; i<uploadDir.length; i++){
      zip.addLocalFile("build/"+uploadDir[i]);
    }

    const downloadName = `${Date.now()}.zip`;
    const data = zip.toBuffer();
 
    // save file zip in root directory
    //zip.writeZip(downloadName);
    
    // code to download zip file
 
    return data;*/
  }
  
};

module.exports = { 
    create_nft
 };
