/**
 * Created by:
 * boontat | monkpuah123@gmail.com
 * Copyright © 2019
 */
import Excel from 'exceljs';

class ExcelManager {
    constructor (filename) {
        this.workbook = this.create();
        this.filename = filename;
    }

    create(){
        if (this.workbook) {
            return this.workbook;
        }
        return new Excel.Workbook();
    }

    setHeader(header, sheetName) {
        let worksheet = this.workbook.addWorksheet(sheetName);

        worksheet.columns = header;
    }

    writerRows(rows, sheetName) {
        let worksheet = this.workbook.addWorksheet(sheetName);

        worksheet.addRows(rows);
    }

    save() {
        let that = this;

        this.workbook.xlsx.writeFile(this.filename)
        .then(function() {
            console.log(`Excel ${that.filename} successfully written!`);
        });
    }
}

export default ExcelManager;