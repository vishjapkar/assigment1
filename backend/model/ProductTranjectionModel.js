const mongoose = require('mongoose');

const ProductTransactionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sold: {
    type: String, 
    enum: ['true', 'false'],
    default: false,
  },
  dateOfSale: {
    type: String,
    required: true,
  },
});

const ProductTransaction = mongoose.model('ProductTransaction', ProductTransactionSchema);

module.exports = ProductTransaction;
