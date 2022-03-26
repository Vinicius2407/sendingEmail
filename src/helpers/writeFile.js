import neatCsv from "neat-csv";
import fs from "fs";
console.log("ta aqui");

export default async function write() {
    console.log("chegou aqui");
    fs.readFile("./csvs/teste.csv",(err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(neatCsv(data));
        return neatCsv(data);
    })
}

write().catch(console.error);