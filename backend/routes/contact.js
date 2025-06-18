// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../config/email');

router.post('/submit', async (req, res) => {
  console.log('Received contact form submission:', req.body);

  try {
    console.log('Attempting to send contact form email...');
    await sendContactEmail(req.body);
    console.log('Contact form email sent successfully');

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message',
      error: error.message
    });
  }
});

module.exports = router;