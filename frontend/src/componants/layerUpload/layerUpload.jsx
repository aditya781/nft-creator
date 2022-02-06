import './layerUpload.css';
import Button from '../button/button';
import LayerName from '../layerName/layerName';
import InputLayer from '../inputLayer/inputLayer';
import axios from 'axios'; 
import React from 'react';


function LayerUpload() {
 
  const [layers, setLayersArray] = React.useState([]);
  const [layerName, setLayerName] = React.useState(null);
  let allData=[];

  function onLayerChange(event){
    let newLayer = event.target.value
    setLayerName(newLayer)
  }
  function addLayer(event){
    setLayersArray((prevLayers)=>{
      return [...prevLayers,layerName]
    })
  }
  function deleteLayer(name){
    setLayersArray((prevLayers)=>{
      let tempArray=[]
      for(let i=0; i<prevLayers.length; i++){
        if(prevLayers[i]!==name){tempArray.push(prevLayers[i])}
      }
      return tempArray;
    })
  }
  
  function onSubmit(e){
    e.preventDefault();
    //const data = new FormData();
    axios.post("http://localhost:3002/v1/nft/create_nft", allData).then((res)=>console.log("success")).catch((err)=>{console.log("error")})
  }
  
  function getFiles(fname, lname){
    const obj={files:fname, lName:lname};
    let formData = new FormData();
    formData.append("back",fname[0])
    console.log("data")
    
    console.log(formData.back)
    allData=formData
    
  }

  return (
    <div>
      <form method='post' onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="layer-container">
          <div className='upload-card-header'><span>UPLOAD</span> ALL LAYERS</div>
          <div className='steps-container'>
              <div className='step-1' id='step-1'>
                  <div className='step-header' id='step-1-header'>Step-01</div>
                  <div className='layer-name'>
                    <input onChange={onLayerChange} type="text" id='flayer' name='layername' placeholder='Layer Name..'></input>
                    <img onClick={addLayer} alt='addimg' src='./images/add.png'/>
                  </div>

                  {layers.map((layerEle)=>{return  <LayerName name={layerEle} deleteLayer={deleteLayer}/>})}
              </div>
              <div className='step-2' id='step-2'>
                  <div className='step-header' id='step-2-header'>Step-02</div>
                  {layers.map((layerEle)=>{return  <InputLayer fileNames={getFiles} name={layerEle}/>})}
                  
                 
                  
                  
              
              </div>
          </div>
          <div className='button-comp'><Button name="Start Creating NFT"/></div>
        </div>
      </form>
    </div>
  );
}

export default LayerUpload;
