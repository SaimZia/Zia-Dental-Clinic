// backend/routes/appointments.js
const express = require('express');
const router = express.Router();
const { sendAppointmentEmail } = require('../config/email');

router.post('/book', async (req, res) => {
  const appointmentData = req.body;
  console.log('Received appointment request:', appointmentData);

  try {
    console.log('Attempting to send email notification...');
    await sendAppointmentEmail(appointmentData);
    console.log('Email notification sent successfully');

    res.status(200).json({
      success: true,
      message: 'Appointment request received successfully!'
    });
  } catch (error) {
    console.error('Error processing appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process appointment request',
      error: error.message
    });
  }
});

module.exports = router;