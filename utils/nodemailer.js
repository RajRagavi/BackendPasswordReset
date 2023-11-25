const nodemailer = require('nodemailer');


// Create a nodemailer transporter with your email service details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ragavi5901@gmail.com',
    pass: '9092759901',
  },
});

module.exports = transporter;

// // Function to send a password reset email
// const sendPasswordResetEmail = (to, subject, html) => {
//   const mailOptions = {
//     from: 'ragavi5901@gmail.com', //  your email
//     to,
//     subject,
//     html,
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = { sendPasswordResetEmail };
