const fsa = require("fs-extra");


const remove = async (src) => {
    try {
      await fsa.remove(src)
      console.log('success!')
    } catch (err) {
      console.error(err)
    }
  }

const modifyDir = async (src, dest) => {
    try {
      await fsa.move(src, dest)
      console.log('move success!')
    } catch (err) {
        await remove(src);
    }
  }

const manage_dir = async (layers)=>{
    for(let i=0; i<layers.length; i++){
        for(let j=0; j<layers[i].files.length; j++){
            let src="public/"+layers[i].files[j];
            let des="public/"+layers[i].name+"/"+layers[i].files[j]
            await modifyDir(src, des);
        }
    }
}

  module.exports = { 
    manage_dir,
    remove
 };