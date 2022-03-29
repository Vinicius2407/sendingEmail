import CsvReadableStream from "csv-reader";
import fs from "fs";

const path = "./src/csvs/teste.csv";

export default async function write() {
    // fs.readFile(path, "utf-8", async (err, data) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     var valueEmail = {email: []};
    //     for(var i = 1; i < data.length; i++) {
    //        valueEmail.push({
    //            email: data[1][1]
    //        })
    //     }
    //     return valueEmail
    // });

    const inputStream = fs.createReadStream(path, "utf-8");
    var valueEmail;
     Promise = new Promise.resolve(inputStream.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, delimiter: ";"}))
                .on("data", async (row) => {
                    console.log("nova linha", row);
                    valueEmail += row;
                    return row;
                })
                .on("end", async () => {
                    // console.log(valueEmail)
                    // return valueEmail;
                })
     )
}