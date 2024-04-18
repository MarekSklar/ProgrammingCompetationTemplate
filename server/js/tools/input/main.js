import readline from 'node:readline/promises';
const rl = readline.createInterface(process.stdin, process.stdout);
export default async function input(question) {
    const answer = rl.question(question);
    return answer;
}
//# sourceMappingURL=main.js.map