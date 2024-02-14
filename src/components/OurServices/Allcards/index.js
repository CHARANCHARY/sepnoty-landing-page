import "./allcard.css";

const Allcards = (props) => {
  const { details } = props;
  const { name, discription, imageUrl } = details;

  return (
    <div className="card-container-00">
      <img src={imageUrl} alt="cloud app" class="card-image-00" />
      <p className="title-00">{name}</p>
      <p className="card-discription-00">{discription}</p>
      <p className="learn-more-00">Learn More</p>
    </div>
  );
};

export default Allcards;
