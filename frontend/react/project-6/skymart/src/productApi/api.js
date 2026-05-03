import axios from "axios"

export const getProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products");
  console.log(res.data)
};


getProducts();