import Mailer from './Mailer.class';

let helloWorld = 'Hello World!';

console.log(`${helloWorld} this is some ES6 JavaScript code`);

let m = new Mailer();

const mailOptions = {
    from: '"Awesome test" <youremail@example.com>', // sender address
    to: '', // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

m.sendMail(mailOptions).catch(console.error);

