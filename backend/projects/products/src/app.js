const express = require("express");
const ProductModel = require("./models/product.model");

const app = express();

app.use(express.json());

// CREATE
app.post("/create-products", async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Request body is missing or not JSON" });
    }

    const { name, description, amount, currency, category, stock } = req.body;

    if (!name || amount == null || stock == null) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newProduct = await ProductModel.create({
      productName: name,
      description,
      price: {
        amount,
        currency,
      },
      category,
      stock,
    });

    return res.status(201).json({
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("error in create api", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// READ
app.get("/products", async (req, res) => {
  try {
    let products = await ProductModel.find();

    return res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.log("error in get api", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// UPDATE
app.put("/products/update/:id", async (req, res) => {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ message: "Request body is missing or not JSON" });
    }

    const { name, description, amount, currency, category, stock } = req.body;

    if (!name || amount == null || stock == null) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const { id } = req.params;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      id,
      {
        productName: name,
        description,
        price: {
          amount,
          currency,
        },
        category,
        stock,
      },
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    console.log("error in update api", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// DELETE
app.delete("/products/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product deleted",
    });
  } catch (error) {
    console.log("error in delete api", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = app;
