function Card(props) {
   const { title, brand, price, thumbnail } = props

   return (
      <div className="card"> 
         <img src={thumbnail} alt={title} />
         <div className="card-content">
            <h3>{title}</h3>
            <p>{brand}</p>
            <b>${price}</b>
         </div>
      </div>
   );
}

export default Card;