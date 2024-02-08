import "./index.css";

const CardItem = (props) => {
  const { cardsList } = props;
  const { title, description, id } = cardsList;

  return (
    <li>
      <div className="cardContainer">
        <div className="c-1">
          <h1 className="c-2">0{id}</h1>
          <h1 className="cardHead">{title}</h1>
        </div>
        <p className="cardPara">{description}</p>
      </div>
    </li>
  );
};

export default CardItem;
