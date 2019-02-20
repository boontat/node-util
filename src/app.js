require('dotenv').config();

import Mailer from './Mailer.class';
import ExcelManager from './Excel.class';

let helloWorld = 'Hello World!';

console.log(`${helloWorld} this is some ES6 JavaScript code`);

// let m = new Mailer();

// const mailOptions = {
//     from: '"Awesome test" <youremail@example.com>', // sender address
//     to: '', // list of receivers
//     subject: 'Hello ', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>', // html body
//     attachments : [
//         {
//             path: '../test.xlsx'
//         }
//     ]
// };

// m.sendMail(mailOptions).catch(console.error);


let filename = 'test.xlsx';
let E = new ExcelManager(filename);

try {
    let rows = [
        [5,'Bob',new Date()], // <== This will be the header
        [4,'Bo2',new Date()], // row by array
    ];
    let sheetName = 'my sheet';
    E.setHeader([
        {header: 'Name'},
        {header: 'Job'},
    ], sheetName);
    E.writerRows(rows, sheetName);
    E.save();
} catch (error) {
    console.error(error);
}
