const express = require("express");
const routes = express.Router();

// Memanggil file controller
const homeController = require("../controllers/home");
const productController = require("../controllers/product");
const detailController = require("../controllers/detail");

// Home
routes.get("/", homeController.mainHome);
// Product
routes.get("/product", productController.mainProduct);
// Detail
routes.get("/detail", detailController.mainDetail);

module.exports = routes;
