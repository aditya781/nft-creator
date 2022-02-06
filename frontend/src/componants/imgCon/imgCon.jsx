import './imgCon.css';


function imgCon(props) {
  return (
    <div className="imgCon-container">
       
        <div className='image-container'>
          <img className='image-card' alt='sdf' src={props.source}/>
        </div>
        {/*<div className='img-div'><img id='cross-img' alt='cross' src='./images/delete-cross.png'/></div>*/}
       
  
    </div>
  );
}

export default imgCon;
