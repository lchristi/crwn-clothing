const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config(); //Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json()); // any request that comes in will be converted to JSON
app.use(bodyParser.urlencoded({extended: true})); //escapes any spaces, special characters

//app.use(cors()); //client is on port 3000 and server is on 5000 which makes it different origins and will give cors error

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build'))); //__dirname is part of node.js, what directory we're currently in
                                                                   // client/build is the script that is defined in package.json
                                                                   // it will serve all static files

    app.get('*', function(req, res) { //any request that comes in send back static files
        res.sendFile(path.join(__dirname, 'client/build', 'index.html')); //index.html contains all our front-end code
    });
}

app.listen(port, error => {
    if(error) throw error;
    console.log('server running on port ' + port);
});

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr){
            res.status(500).send({error: stripeErr});
        } else {
            res.status(200).send({success: stripeRes})
        }
    })

});