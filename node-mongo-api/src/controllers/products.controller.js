import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const { ProductId } = req.params;
    const foundProduct = await Product.findById(ProductId);
    res.status(200).json(foundProduct);
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, category, price, imgUrl } = req.body;
    const newProduct = new Product({ name, category, price, imgUrl });
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductById = async (req, res) => {
  try {
    const { ProductId } = req.params;
    const { name, category, price, imgUrl } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      ProductId,
      { name, category, price, imgUrl },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { ProductId } = req.params;
    await Product.findByIdAndDelete(ProductId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};
