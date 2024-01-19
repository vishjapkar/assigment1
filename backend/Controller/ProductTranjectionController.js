const ProductTransaction = require("../model/ProductTranjectionModel");

// Create a new ProductTransaction record
const createProductTransaction = async (req, res) => {
  try {
    const newProductTransaction = new ProductTransaction(req.body); 
    await newProductTransaction.save();
    res.status(201).json(newProductTransaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a list of all ProductTransaction records
const getProductTransaction = async (req, res) => {
  try {
    const productTransactions = await ProductTransaction.find(); 
    res.json(productTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createProductTransaction,
    getProductTransaction,
};
