import './button.css';

function button(props) {
  return (
    <div className="button-container">
        <button>{props.name}</button>
    </div>
  );
}

export default button;
