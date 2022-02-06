import './inputLayer.css';
import React from 'react';
import ImgCon from '../imgCon/imgCon';


function InputLayer(props) {
    const [profileImage, setImage] = React.useState("")

    function imageHandler(event){
        const reader = new FileReader();
        reader.onload = ()=>{
        if(reader.readyState===2){
            setImage(reader.result)
        }

        }
        reader.readAsDataURL(event.target.files[0])
        console.log(event.target.files)
        const allfiles=event.target.files
        props.fileNames(allfiles, props.name)
    }

   
  return (
    <div className="inputLayer">
        <img id='upload-image' alt='upload' src='./images/upload.png'/>
        <input onChange={imageHandler} type="file" id="files" name={props.name} multiple></input>
        <ImgCon  source={profileImage}/>
    </div>
  );
}

export default InputLayer;
