import nodemailer from "nodemailer"

const pass = process.env.TRANSPORT_AUTH_PASS;
const user = process.env.TRANSPORT_AUTH_USER;
;

// async..await is not allowed in global scope, must use a wrapper
export default async function sendingEmail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  console.log(user, pass);
  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   ssl: true,
  //   auth: {        
  //       user: user,
  //       pass: pass
  //   },
  // });

  //teste
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lawson.rogahn82@ethereal.email',
        pass: 'RxgQvCmxk8gzm8wa4z'
    }
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Foz Delivery" <thais@fozdelivery.com.br>', // sender address
    to: "viniciussilvapereira24@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendingEmail().catch(console.error);