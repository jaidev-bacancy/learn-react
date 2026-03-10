import Basket from "./Basket";
import Button from "./Button";
import { useState } from "react";

const totalApples = 10;

const ItemTransfer = () => {
   const [rightBasketApples, setRightBasketApples] = useState(0);
   const [leftBasketApples, setLeftBasketApples]= useState(totalApples - rightBasketApples);

   const leftArrowClickHandler = () => {
      if (rightBasketApples > 0) {
         setRightBasketApples(rightBasketApples - 1);
         setLeftBasketApples(leftBasketApples + 1);
      }
   }

   const rightArrowClickHandler = () => {
      if (leftBasketApples > 0) {
         setLeftBasketApples(leftBasketApples - 1);
         setRightBasketApples(rightBasketApples + 1);
      }
   }

   return (
      <>
      <section>
         <Basket basketName="Left Basket" quantity={leftBasketApples} />
         <Button
            name="Left arrow"
            imageUrl={new URL("../assets/left-arrow.png", import.meta.url)}
            onClick={leftArrowClickHandler}
         />
         <Button
            name="Right arrow"
            imageUrl={new URL("../assets/right-arrow.png", import.meta.url)}
            onClick={rightArrowClickHandler}
         />
         <Basket basketName="Right Basket" quantity={rightBasketApples} />
      </section>
      </>
   );
};

export default ItemTransfer;
