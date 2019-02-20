/**
 * Created by:
 * boontat | monkpuah123@gmail.com
 * Copyright © 2019
 */
import nodeMailer from 'nodemailer';

class Mailer {
  async sendMail(mailOptions) {

    let account = await nodeMailer.createTestAccount();

    const transporter = nodeMailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,  //true for 465 port, false for other ports
      auth: {
        user: account.user,
        pass: account.pass
      }
    });

    let info = await transporter.sendMail(mailOptions)

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
  };
};

export default Mailer;