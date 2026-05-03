import "./ProductCard.css"

function ProductCard({name, price, category, image}) {    

  return (
    <>
        <div className="product-card">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <h3 className="product-name">{name}</h3>
          <p>{category}</p>
          <h5>{price}00</h5>
          <button className="btn">Add to Cart</button>
        </div>
    </>
  )
}

export default ProductCard;