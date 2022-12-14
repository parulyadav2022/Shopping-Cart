const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const {authenticate} = require("../middleware/auth");
const productController = require('../controller/productController');
const cartController = require("../controller/cartController")
const orderController = require("../controller/orderController")


// --------------------------------π±βππ±βπUser Routerπ±βππ±βπ----------------------------------
router.post("/register",userController.userRegister)
router.post("/login", userController.userLogin)
router.get("/user/:userId/profile",authenticate, userController.getUserProfile)
router.put("/user/:userId/profile",authenticate, userController.updateUserProfile)



//--------------------------------π±βππ±βπProduct Routerπ±βππ±βπ--------------------------------
router.post("/products", productController.createProduct)
router.get("/products", productController.getProducts)
router.get("/products/:productId",productController.getProductsById)
router.put("/products/:productId", productController.updateProductById)
router.delete("/products/:productId",productController.deleteProductById)



//--------------------------------π±βππ±βπCart Routerπ±βππ±βπ-----------------------------------
router.post("/users/:userId/cart", authenticate, cartController.createCart)
router.put("/users/:userId/cart", authenticate, cartController.updateCart)
router.get("/users/:userId/cart", authenticate, cartController.getCart)
router.delete("/users/:userId/cart", authenticate, cartController.dltCart)



//--------------------------------π±βππ±βπOrder Routerπ±βππ±βπ----------------------------------
router.post("/users/:userId/orders", authenticate, orderController.createOrder)
router.put("/users/:userId/orders", authenticate, orderController.updateOrder)




module.exports = router