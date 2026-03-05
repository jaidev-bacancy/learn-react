const Button = (props) => {
   const { name, imageUrl, onClick } = props;
   return (
      <button type="submit" onClick={onClick}>
         <img src={imageUrl} alt={name} />
      </button>
   );
};

export default Button;
