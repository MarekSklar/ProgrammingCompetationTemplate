import input from "./tools/input/main.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from 'url';
import express from "express";
// setup
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.static(__dirname + "/public"));
/*index*/
app.get('/', (_, res) => {
    res.sendFile(path.resolve('client/html/index.html'));
});
/*404 error*/
app.get('*', function (req, res) {
    res.redirect("https://http.cat/404");
});
/*port*/
app.listen(1234, () => {
    console.log('App listening on port 1234!');
});
const inputA = await input("input A: ");
const inputB = await input("input B: ");
console.log(`inputs: ${inputA} & ${inputB}`);
//# sourceMappingURL=index.js.map