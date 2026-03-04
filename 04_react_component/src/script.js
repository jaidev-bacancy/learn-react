import ReactDOM from 'react-dom/client';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
         root.render(
            <div className="container">
               {data.products.map((product) =>
                  <Card
                     key = {product.id}
                     thumbnail = {product.thumbnail}
                     title = {product.title}
                     brand = {product.brand}
                     price = {product.price}
                  />,
               )}
            </div>,
         );
      })
);