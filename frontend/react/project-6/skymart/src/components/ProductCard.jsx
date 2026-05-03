const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#111] rounded-xl p-4 ">
      <img src={product.image} className="h-40 w-full object-contain" />

      <h3 className="mt-2">{product.title}</h3>
      <p className="text-indigo-400 font-bold">${product.price}</p>

      <button className="mt-3 bg-indigo-500 px-3 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

/*
👉 WHERE TO ADD FUNCTIONALITY:
- Add to cart click handler
- Dispatch to context / redux

👉 WHY:
- Keeps product logic reusable
*/
