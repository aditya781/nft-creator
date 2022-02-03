const mongoose=require("mongoose");



const temp_images_schema=new mongoose.Schema({
    name : { 
        type : String 
    },
    image : { 
        data: Buffer,
        contentType:String
    }
})
mongoose.pluralize(null);
const temp_images=mongoose.model("temp_images",temp_images_schema);
module.exports=temp_images;