const { Router } = require('express');
const routerLogin = require("../routes/routerLogin");
const routerMovies = require("../routes/routerMovies");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/movies",routerMovies)
router.use("/login", routerLogin)


module.exports = router;
