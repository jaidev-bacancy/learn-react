import ReactDOM from "react-dom/client";
import "../css/style.css";

function Card(key, productImage, productName, productBrand, productPrice) {
   return (
      <div className="card" key={key}>
         <img src={productImage} alt={productName} />
         <div className="card-content">
            <h3>{productName}</h3>
            <p>{productBrand}</p>
            <b>${productPrice}</b>
         </div>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) => {
      root.render(
         <div className="container">
            {data.products.map((product) =>
               Card(
                  product.id,
                  product.thumbnail,
                  product.title,
                  product.brand,
                  product.price,
               ),
            )}
         </div>,
      );
   });
