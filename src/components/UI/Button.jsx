import "./Button.css"
export const Button = ({ buttonName, handleClick, buttonText }) => {
  return (
    <button
      className="std-button"
      name={buttonName}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  )
}


<Button
  handleClick={createNewOrder}
  buttonText={buttonText}
  buttonName={buttonName} />
