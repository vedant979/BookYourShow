import "./Button.css";
export const Button = (props) => {
  return (
    <button className='btn'>
        {props.name}
    </button>
  )
}
