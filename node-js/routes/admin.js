const path = require("path");

const express = require("express");

const productsController = require("../controllers/products");

const router = express.Router();

// GET on /admin/add-product
router.get("/add-product", productsController.getAddProduct);

// POST on /admin/add-product
router.post("/add-product", productsController.postAddProduct);

// GET on /admin/products
router.get("/products", productsController.getProducts);

module.exports = router;
