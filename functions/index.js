const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Initialize Stripe
const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Simple health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Sucess!' });
});

// Payment intent creation
app.post('/payment/create', async (req, res) => {
  try {
    const total = parseFloat(req.query.total);
    if (isNaN(total) || total <= 0) {
      return res.status(400).json({ message: 'Invalid total amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Stripe expects cents
      currency: 'usd',
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    logger.error('Stripe payment error', error);
    res.status(400).json({ message: error.message });
  }
});

// Export as Firebase Function
exports.api = onRequest({ region: 'us-central1' }, app);
