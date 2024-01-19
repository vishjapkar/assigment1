const express = require('express');
const router = express.Router();
const {
    createProductTransaction,
    getProductTransaction,
 
} = require('../Controller/ProductTranjectionController');

// Create a new ProductTransaction record
router.post('/ProductTransaction', createProductTransaction);

// Get a list of all ProductTransaction records
router.get('/ProductTransaction', getProductTransaction);

module.exports = router;