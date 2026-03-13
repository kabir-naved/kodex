import "./App.css";
import ProductCard from "./productCard/ProductCard.jsx"

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹1999",
      category: "Electronics",
      image:
        "https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg",
    },
    {
      id: 2,
      name: "Smart Speakers",
      price: "₹2999",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "₹2499",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];


  return (
    <main className="products">
      <h1>Our Products</h1>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
