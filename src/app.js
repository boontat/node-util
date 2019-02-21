import Mailer from './Mailer.class';
import ExcelManager from './Excel.class';
import Utility from './Util.class';



let helloWorld = 'Hello World!';

Utility.printSummary(`${helloWorld} this is some ES6 JavaScript code`, '#');

for (let index = 0; index < 3; index++) {
    let uniqueAlias = Utility.generateEmailAlias('boontat');

    console.log(uniqueAlias);

}

let randomString = Utility.generateRandomString("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 32);
console.log(randomString);
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


let filename = `test.${process.env.EXCEL_EXTENSION}`;
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
