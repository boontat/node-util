/**
 * Created by:
 * boontat | monkpuah123@gmail.com
 * Copyright © 2019
 */
import nodeMailer from 'nodemailer';

class Mailer {
  sendMail (req, res) {
    const transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,  //true for 465 port, false for other ports
      auth: {
        user: '',
        pass: ''
      }
    });
    const mailOptions = {
      from: '"Your Name" <youremail@example.com>', // sender address
      to: '', // list of receivers
      subject: 'Hello ', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400).send({success: false})
      } else {
        res.status(200).send({success: true});
      }
    });
  };
};

export default Mailer;