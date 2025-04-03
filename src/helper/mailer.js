
const nodemailer = require('nodemailer');

const sendEmail = async (email, token) => {
    const SMTP_USER= process.env.SMTP_USER; 
    const SMTP_PASS= process.env.SMTP_PASS;
    
    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error('SMTP credentials are not set in environment variables');
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  
    await transporter.sendMail({
      from: SMTP_USER,
      to: email,
      subject: 'Your Authentication Token',
      text: `Here is your Auth0 token: ${token}`,
    });
  };

  module.exports = { sendEmail };