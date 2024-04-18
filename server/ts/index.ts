import input from "./tools/input/main.js";
import path from "path";
import rootDir from "./utils/rootDir.js";
import express from "express";

// setup
const app = express();

app.use(express.static(path.join(rootDir, 'client')));
// index
app.get('/', (_, res) => {
    res.sendFile(path.join(rootDir, 'client/html/index.html'));
});
  
// port
app.listen(1234);

const inputA = await input("input A: ");
const inputB = await input("input B: ");

console.log(`inputs: ${inputA} & ${inputB}`);
