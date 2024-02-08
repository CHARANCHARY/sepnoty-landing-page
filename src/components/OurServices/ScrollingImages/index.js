import "./index.css";

const ScrollingImagesContent = (props) => {
  const { details } = props;
  const { imageUrl, alt } = details;

  return (
    <div className="slide-00">
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default ScrollingImagesContent;
