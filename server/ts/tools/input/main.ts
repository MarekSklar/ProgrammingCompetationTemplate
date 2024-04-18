import readline from 'node:readline/promises';

const rl = readline.createInterface(process.stdin, process.stdout);

export default async function input(question: string) {    
    const answer: Promise<string> = rl.question(question);

    return answer;
}