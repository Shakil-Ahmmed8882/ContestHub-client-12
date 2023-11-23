const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn bg-lime-500">
      {text}
    </button>
  );
};

export default Button;
