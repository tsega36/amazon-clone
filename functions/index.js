const { setGlobalOptions } = require('firebase-functions/v2');
const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
// dotenv.config();

// Global options for v2 functions
setGlobalOptions({ maxInstances: 10 });

const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
  logger.info('API root hit');
  res.status(200).json({ message: 'Success!' });
});
app.post('/payment/create', async (req, res) => {
  try {
    const total = parseFloat(req.query.total);
    if (isNaN(total) || total <= 0) {
      return res.status(400).json({ message: 'Invalid total amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // convert dollars to cents
      currency: 'usd',
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});
exports.api = onRequest({ region: 'us-central1' }, app);
