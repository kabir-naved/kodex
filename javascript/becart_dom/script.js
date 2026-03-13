const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59,
    category: "electronics",
    rating: 4.5,
    thumbnail: "https://picsum.photos/300?random=1",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 120,
    category: "electronics",
    rating: 4.2,
    thumbnail: "https://picsum.photos/300?random=2",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 80,
    category: "fashion",
    rating: 4.7,
    thumbnail: "https://picsum.photos/300?random=3",
  },
  {
    id: 4,
    title: "Backpack",
    price: 35,
    category: "accessories",
    rating: 4.1,
    thumbnail: "https://picsum.photos/300?random=4",
  },
  {
    id: 5,
    title: "Gaming Mouse",
    price: 45,
    category: "electronics",
    rating: 4.6,
    thumbnail: "https://picsum.photos/300?random=5",
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 70,
    category: "electronics",
    rating: 4.4,
    thumbnail: "https://picsum.photos/300?random=6",
  },
  {
    id: 7,
    title: "Sunglasses",
    price: 25,
    category: "fashion",
    rating: 4.0,
    thumbnail: "https://picsum.photos/300?random=7",
  },
  {
    id: 8,
    title: "Laptop Stand",
    price: 30,
    category: "office",
    rating: 4.3,
    thumbnail: "https://picsum.photos/300?random=8",
  },
  {
    id: 9,
    title: "Mechanical Keyboard",
    price: 95,
    category: "electronics",
    rating: 4.8,
    thumbnail: "https://picsum.photos/300?random=9",
  },
  {
    id: 10,
    title: "Office Chair",
    price: 150,
    category: "furniture",
    rating: 4.2,
    thumbnail: "https://picsum.photos/300?random=10",
  },
  {
    id: 11,
    title: "Water Bottle",
    price: 15,
    category: "lifestyle",
    rating: 4.1,
    thumbnail: "https://picsum.photos/300?random=11",
  },
  {
    id: 12,
    title: "Fitness Band",
    price: 55,
    category: "electronics",
    rating: 4.3,
    thumbnail: "https://picsum.photos/300?random=12",
  },
  {
    id: 13,
    title: "Denim Jacket",
    price: 90,
    category: "fashion",
    rating: 4.6,
    thumbnail: "https://picsum.photos/300?random=13",
  },
  {
    id: 14,
    title: "Table Lamp",
    price: 40,
    category: "home",
    rating: 4.4,
    thumbnail: "https://picsum.photos/300?random=14",
  },
  {
    id: 15,
    title: "Coffee Mug",
    price: 12,
    category: "kitchen",
    rating: 4.0,
    thumbnail: "https://picsum.photos/300?random=15",
  },
  {
    id: 16,
    title: "Gaming Controller",
    price: 65,
    category: "electronics",
    rating: 4.7,
    thumbnail: "https://picsum.photos/300?random=16",
  },
  {
    id: 17,
    title: "Yoga Mat",
    price: 28,
    category: "fitness",
    rating: 4.5,
    thumbnail: "https://picsum.photos/300?random=17",
  },
  {
    id: 18,
    title: "LED Monitor",
    price: 220,
    category: "electronics",
    rating: 4.6,
    thumbnail: "https://picsum.photos/300?random=18",
  },
  {
    id: 19,
    title: "Travel Suitcase",
    price: 130,
    category: "travel",
    rating: 4.3,
    thumbnail: "https://picsum.photos/300?random=19",
  },
  {
    id: 20,
    title: "Portable Charger",
    price: 32,
    category: "electronics",
    rating: 4.4,
    thumbnail: "https://picsum.photos/300?random=20",
  },
];
//   total: 100,
//   skip: 0,
//   limit: 30,

const productContainer = document.querySelector(".products-container");
let productList = "";

products.forEach((elem) => {
  productList += `
    <div class="product-card">
        <img src="${elem.thumbnail}" alt="${elem.title}" />
        <h3>${elem.title}</h3>
        <p>$${elem.price}</p>
       <div>
             <button class="add-to-cart">Add to Cart</button>
             <button class="Buy">Buy</button>
       </div>
    </div>
  `;
});

productContainer.innerHTML = productList;
