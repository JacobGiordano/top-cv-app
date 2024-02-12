import "../styles/SectionHeader.css";
import Button from "./Button";

function SectionHeader({children, text, buttonText}) {
  return (
    <div className="section-header">
      <h2>{text}</h2>
      { buttonText && <Button text={buttonText}/>}
    </div>
  )
}
export default SectionHeader