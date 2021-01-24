const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HWoAQCIDtHygrq4iK0Z9r19EiHUOS3H4GTxu9Ap1wy6LXZSFR8EXQhBUsC2hghbSuqaV22QcAiY3PVJRz0u8JuW001pRH63wu')
//the above line has the secret key that is present in the stripe


// to setup an api

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }))
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send('hello world') )

app.post("/payments/create", async (req, res) => {
    const total = req.query.total; //we can use request.params also
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });
    
      // OK - Created
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
});

//listen command
exports.api = functions.https.onRequest(app);


// http://localhost:5001/clone-f43d5/us-central1/api








// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
