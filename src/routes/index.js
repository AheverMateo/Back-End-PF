const { Router } = require('express');
const routerLogin = require("./routerLogin")
const routerMovies = require("./routerMovies")
const routerShopping = require("./routerShopping")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/movies",routerMovies)
router.use("/login", routerLogin)
router.use("/shopping", routerShopping)

module.exports = router;