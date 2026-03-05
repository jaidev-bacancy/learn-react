const Basket = (props) => {
   const { basketName, quantity } = props;
   return (
      <div className="basket">
         <span>
            <b>
               {quantity} apples
            </b>
         </span>
         <p>{basketName}</p>
      </div>
   );
};

export default Basket;