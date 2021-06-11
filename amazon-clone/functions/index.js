const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51AzFRoLZNGEXxhDFT5lwqiSi88kMzUtdbkoIah5VMwFtyrTQsghFs5NrH5HscfiLE2aZmGqFnVXTfZvwil85MlX6005Cy7iLLO");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello Rahmik Gordon"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


//EXAMPLE ENDPOINT
///http://localhost:5001/challenge-e53bd/us-central1/api