import { createRoot } from "react-dom/client";
import Basket from "./Basket";
import Button from "./Button";

const totalApples = 10;
let rightBasketApples = 0;
let leftBasketApples = totalApples - rightBasketApples;

const root = createRoot(document.getElementById('root'));

const ItemTransfer = () => {

   const leftArrowClickHandler = () => {
      if (rightBasketApples <= 0) { alert("Right bakset is empty"); }
      else {
         rightBasketApples--;
         leftBasketApples++;
         root.render(<ItemTransfer />);
      }
   }

   const rightArrowClickHandler = () => {
      if (leftBasketApples <= 0) { alert("Left bakset is empty"); }
      else {
         rightBasketApples++;
         leftBasketApples--;
         root.render(<ItemTransfer />);
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
