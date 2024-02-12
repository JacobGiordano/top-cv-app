import CardHeader from "./CardHeader";
import Form from "./Form";
import Button from "./Button";

function Card({ cardData }) {
  return (
    <div className='card' id={cardData.id} key={cardData.id}>
      <CardHeader>
        <h3 className="card-title">{cardData.name}</h3>
        <Button text="x"></Button>
      </CardHeader>
      <Form cardData={cardData} />
    </div>
  );
}
export default Card;
