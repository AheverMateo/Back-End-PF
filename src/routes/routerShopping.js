const { Router } = require('express');

const { createOrder, success } = require("../controllers/controllerShopping")

const routerShopping = Router();


routerShopping.post('/create-order', createOrder)
routerShopping.get("/success", success)







module.exports = routerShopping