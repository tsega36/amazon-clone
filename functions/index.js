const { setGlobalOptions } = require('firebase-functions/v2');
const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_KEY);

setGlobalOptions({ maxInstances: 10 });

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
    if (total <= 0) throw new Error('Invalid total');
console.log('Total received:', total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100),
      currency: 'usd',
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // console.error(error);
    res.status(400).json({ message: error.message });
  }
});

exports.api = onRequest({ region: 'us-central1' }, app);
