// 🔥 Dummy API (later replace with real backend)

export const getProducts = async () => {
  return [
    {
      id: 1,
      title: "Camera Lens",
      price: 599,
      category: "electronics",
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      rating: 4.5,
    },
  ];
};

/*
👉 WHY:
- Keep API separate
- Easy to replace with real backend later
*/
