const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net', // Replace with your OVH SMTP server
  port: 465, // Use the correct port for secure SMTP (confirm this with OVH)
  secure: true, // Use true for SSL
  auth: {
    user: 'hello@pixelpress.tn', // Replace with your OVH email address
    pass: '4vwN2s1Nj0Vq' // Replace with your OVH email password or app password
  }
});

const mailOptions = {
  from: 'hello@pixelpress.tn',
  to: 'marketing@redstart.tn', // Replace with the recipient's email address
  subject: 'Test Email',
  text: 'Hello, this is a test email!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
