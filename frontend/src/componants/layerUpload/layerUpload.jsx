import './layerUpload.css';
import Button from '../button/button';
import ImgCon from '../imgCon/imgCon';




function layerUpload() {
  return (
    <div className="layer-container">
        <div className='upload-card-header'><span>UPLOAD</span> ALL LAYERS</div>
        <div className='steps-container'>
            <div className='step-1' id='step-1'>
                <div className='step-header' id='step-1-header'>Step-01</div>
                <div className='layer-name'>
                  <input type="text" id='flayer' name='layername' placeholder='Layer Name..'></input>
                  <img src='./images/add.png'/>
                </div>
            </div>
            <div className='step-2' id='step-2'>
                <div className='step-header' id='step-2-header'>Step-02</div>
                <img id='upload-image' alt='upload' src='./images/upload.png'/>
                <ImgCon />
                <ImgCon />
                <ImgCon />
                <ImgCon />
            
            </div>
        </div>
        <div className='button-comp'><Button name="Start Creating NFT"/></div>
    </div>
  );
}

export default layerUpload;
