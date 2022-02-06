import './layerName.css';

function LayerName(props) {
   
  return (
    <div className='layer-name2'>
        <span  type="text" id='flayer2' name='layername' placeholder='Layer Name..'>{props.name}</span>
        <img   onClick={()=>{props.deleteLayer(props.name)}} alt='addimg' src='./images/trashcan.png'/>
    </div>
  );
}

export default LayerName;
