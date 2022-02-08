import './inputLayer.css';
import React from 'react';
import ImgCon from '../imgCon/imgCon';


function InputLayer(props) {
    const [profileImage, setImage] = React.useState([])

    const imageLoad =  (n, event) =>{
      const reader = new FileReader();
        reader.onload = ()=>{
        if(reader.readyState===2){
            setImage((prev)=>{return [...prev,reader.result]})
            console.log(profileImage.length)
        }

        }
        reader.readAsDataURL(event.target.files[n])
    }
    function imageHandler(event){
      
        /*const reader = new FileReader();
        reader.onload = ()=>{
        if(reader.readyState===2){
            setImage((prev)=>{return [...prev,reader.result]})
            console.log(profileImage.length)
        }

        }
        reader.readAsDataURL(event.target.files[0])*/
        for(let i=0; i<event.target.files.length; i++){
          imageLoad(i, event)
        }
         
  
        
        
        const allfiles=event.target.files
        console.log("allfiles : ")
        console.log(allfiles)
        props.fileNames(allfiles, props.name)
    }

   
  return (
    <div className="inputLayer">
        <img id='upload-image' alt='upload' src='./images/upload.png'/>
        <input className='take-input' onChange={imageHandler} type="file" id="files" name={props.name} multiple></input>
        {profileImage.map((val)=>{
          return <ImgCon  source={val} key={val}/>
        })}
    </div>
  );
}

export default InputLayer;
