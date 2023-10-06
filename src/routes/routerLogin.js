const { Router } = require('express');
const { getUser } = require('../controllers/getUser');
const { postUser } = require('../controllers/postUser');
const { putUser } = require('../controllers/putUser');
const { verifyToken } = require('../controllers/verifyToken');



const routerLogin = Router();

routerLogin.put("/update",verifyToken, putUser )
routerLogin.post("/", postUser )
routerLogin.get("/", getUser )



module.exports = routerLogin




