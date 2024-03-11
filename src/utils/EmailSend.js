import emailjs from "emailjs-com";
// const emailjs = require("emailjs-com");

export const sendEmail = (emailData) => {
  // Replace these values with your EmailJS template information
  const templateId = "template_p0lehsn";
  const userId = "YRZEQC3wYqOWMbasL";

  // Replace these values with the actual data you want to send
  const data = {
    to_name: emailData.to_name,
    to_email: emailData.to_email,
    // reply_to: emailData.reply_to,
    // subject: emailData.subject,
    // message: emailData.message,
  };

  // Send email using EmailJS
  emailjs
    .send("service_8jobu1p", templateId, data, userId)
    .then((response) => {
      // console.log('Email sent successfully:', response);
      // alert("Email sent successfully");
      // console.log("Email sent successfully");
    })
    .catch((error) => {
      // console.error('Error sending email:', error);
      console.error(error.message);
      // console.log(error.message);
    });
};
