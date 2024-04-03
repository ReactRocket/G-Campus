import emailjs from "emailjs-com";

export function sendEmail(emailData) {
  // Replace these values with your EmailJS template information
  const templateId = "template_wssgj3o";
  const userId = "e1HkM0uwHMl70jQdO";

  // Replace these values with the actual data you want to send
  const data = {
    to_name: emailData.to_name,
    to_email: emailData.to_email,
    amount: emailData.amount,
    t_id: emailData.t_id,
    t_date: emailData.t_date,
    s_id: emailData.s_id,
    c_id: emailData.c_id,
    d_id: emailData.d_id,
  
  };

  // Send email using EmailJS
  emailjs
    .send("service_xd5t8lm", templateId, data, userId)
    .then((response) => {
      console.log('Email sent successfully:', response);
      // alert("Email sent successfully");
      // console.log("Email sent successfully");
    })
    .catch((error) => {
      // console.error('Error sending email:', error);
      console.error(error.message);
      // console.log(error.message);
    });
}




