import "../styles/Button.css";

function Button({children, text, onClick}) {
  return (
    <button onClick={onClick} title={text}>{children ? children : text}</button>
  )
}
export default Button