// backend/config/email.js
const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Email configuration loading...');
console.log('Using email:', process.env.EMAIL_USER);
console.log('Clinic email:', process.env.CLINIC_EMAIL);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  debug: true,
  logger: true
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

const sendContactEmail = async (contactData) => {
  console.log('Preparing to send contact email with data:', contactData);

  // Email to clinic
  const clinicMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CLINIC_EMAIL,
    subject: 'New Contact Form Submission - Zia Dental Care',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone}</p>
          
          <h3 style="color: #1f2937; margin-top: 20px;">Message</h3>
          <p style="background-color: white; padding: 15px; border-radius: 4px;">${contactData.message}</p>
        </div>

        <p style="color: #6b7280; font-size: 14px;">
          This message was submitted through the contact form on your website at ${new Date().toLocaleString()}.
        </p>
      </div>
    `
  };

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER,
    to: contactData.email,
    subject: 'Thank You for Contacting Zia Dental Care',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Thank You for Contacting Us</h2>
        
        <p>Dear ${contactData.name},</p>

        <p>Thank you for reaching out to Zia Dental Care. We have received your message and appreciate you taking the time to contact us.</p>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Your Message Details:</h3>
          <p>${contactData.message}</p>
        </div>

        <p>Our team will review your message and get back to you within 24-48 business hours.</p>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937;">Contact Information</h3>
          <p>If you need immediate assistance, please don't hesitate to:</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>📞 Call us: +92 314 7776565</li>
            <li>🏥 Visit us: <a href='https://www.google.com/maps/place/Zia+Dental+Care/@34.0788388,72.6081485,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38defbb4cff22761:0x9fa2b4873b31bea7!8m2!3d34.0788388!4d72.6107234!16s%2Fg%2F11fsx7c8mz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>Unnamed Road, Topi, Swabi, Khyber Pakhtunkhwa, Pakistan</a>
</li>
            <li>⏰ Hours: Mon-Fri 9AM-6PM, Sat 9AM-2PM</li>
          </ul>
        </div>

        <p style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; color: #6b7280; font-size: 14px;">
          This is an automated response to confirm we've received your message. Please do not reply to this email.
        </p>
      </div>
    `
  };

  try {
    console.log('Sending emails...');
    await transporter.sendMail(clinicMailOptions);
    await transporter.sendMail(userMailOptions);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

const sendAppointmentEmail = async (appointmentData) => {
  console.log('Preparing to send appointment email with data:', appointmentData);

  // Email to clinic
  const clinicMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CLINIC_EMAIL,
    subject: 'New Appointment Request - Zia Dental Care',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Appointment Request</h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Patient Information</h3>
          <p><strong>Name:</strong> ${appointmentData.name}</p>
          <p><strong>Email:</strong> ${appointmentData.email}</p>
          <p><strong>Phone:</strong> ${appointmentData.phone}</p>
          
          <h3 style="color: #1f2937; margin-top: 20px;">Appointment Details</h3>
          <p><strong>Requested Date:</strong> ${appointmentData.date}</p>
          <p><strong>Requested Time:</strong> ${appointmentData.time}</p>
          <p><strong>Service:</strong> ${appointmentData.service}</p>
          <p><strong>Preferred Doctor:</strong> ${appointmentData.doctor}</p>
          
          <h3 style="color: #1f2937; margin-top: 20px;">Additional Notes</h3>
          <p style="background-color: white; padding: 15px; border-radius: 4px;">${appointmentData.notes || 'No additional notes provided.'}</p>
        </div>

        <p style="color: #6b7280; font-size: 14px;">
          This appointment was requested through your website at ${new Date().toLocaleString()}.
        </p>
      </div>
    `
  };

  // Confirmation email to patient
  const patientMailOptions = {
    from: process.env.EMAIL_USER,
    to: appointmentData.email,
    subject: 'Appointment Request Confirmation - Zia Dental Care',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">Appointment Request Confirmation</h2>
        
        <p>Dear ${appointmentData.name},</p>

        <p>Thank you for requesting an appointment with Zia Dental Care. This email confirms that we have received your appointment request.</p>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Requested Appointment Details:</h3>
          <p><strong>Date:</strong> ${appointmentData.date}</p>
          <p><strong>Time:</strong> ${appointmentData.time}</p>
          <p><strong>Service:</strong> ${appointmentData.service}</p>
          <p><strong>Preferred Doctor:</strong> ${appointmentData.doctor}</p>
        </div>

        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="color: #92400e; margin: 0;">
            <strong>Important Note:</strong> This is not a confirmed appointment. Our team will review your request and contact you within 24 hours to confirm your appointment or suggest alternative times if needed.
          </p>
        </div>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937;">Pre-Appointment Information</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>✓ Please arrive 15 minutes before your appointment time</li>
            <li>✓ Bring your insurance card and photo ID</li>
            <li>✓ Bring a list of current medications</li>
            <li>✓ If you need to reschedule, please give us 24 hours notice</li>
          </ul>
        </div>

        <div style="margin-top: 30px;">
          <h3 style="color: #1f2937;">Contact Information</h3>
          <p>If you need to reach us:</p>
          <ul style="list-style-type: none; padding-left: 0;">
            <li>📞 Phone: +92 314 7776565</li>
            <li>📧 Email: clinicziadental@gmail.com</li>
            <li>🏥 Address: <a href='https://www.google.com/maps/place/Zia+Dental+Care/@34.0788388,72.6081485,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38defbb4cff22761:0x9fa2b4873b31bea7!8m2!3d34.0788388!4d72.6107234!16s%2Fg%2F11fsx7c8mz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>Unnamed Road, Topi, Swabi, Khyber Pakhtunkhwa, Pakistan</a>
</li>
            <li>⏰ Hours: Mon-Fri 9AM-6PM, Sat 9AM-2PM</li>
          </ul>
        </div>

        <p style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; color: #6b7280; font-size: 14px;">
          This is an automated confirmation of your appointment request. Please do not reply to this email.
        </p>
      </div>
    `
  };

  try {
    console.log('Sending appointment emails...');
    await transporter.sendMail(clinicMailOptions);
    await transporter.sendMail(patientMailOptions);
    return true;
  } catch (error) {
    console.error('Failed to send appointment email:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
  sendAppointmentEmail
};