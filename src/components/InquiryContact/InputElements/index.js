import "./index.css";

const InputElements = (props) => {
  const { inputType } = props;

  return (
    <li>
      <input type="text" placeholder={inputType} className="contact-us-input" />
    </li>
  );
};

export default InputElements;
