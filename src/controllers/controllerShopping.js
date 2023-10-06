const mercadopago = require("mercadopago");
require('dotenv').config()

const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
    access_token:ACCESS_TOKEN
})



const createOrder = (req, res) => {
    const { movies } = req.body
    
    const items = movies.map(movie => {
        return {
            title: movie.title,
            quantity: 1,
            unit_price: movie.price,
            currency_id:"ARS",

        }

    });
    let preference = {
        items,
        back_urls:{
            success:'http://localhost:3001/Nonflix/shopping/success',
            failure: "",
            pending: "" //cuando el usuario no ha pagado
        },
        /* notification_url:'https://572e-181-117-92-240.ngrok-free.app/payment/webhook' */
        auto_return: "approved"
    }

    mercadopago.preferences.create(preference)
    .then(response => res.status(200).json(response))
    .catch(error => res.status(400).json({error:error.message}))
}

const success = (req, res) => {
    res.redirect("http://localhost:5173/Home")
    
}





module.exports ={ 
    createOrder,
    success
}
