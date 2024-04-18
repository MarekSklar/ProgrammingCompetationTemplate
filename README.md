# Template for programming competation
This template is a basic node.js application based on typescript with a support of tailwind CLI.

## Setup
```
npm install
npm run setup
npm run dev
```

## How to use things?
Main ones:
```
* npm run setup    builds ts files into js & tailwind into css

* npm run app      runs app
* npm run app-b    + builds ts files into js
* npm run app-fb   + builds tailwind into css

* npm run style    automatically builds tailwind into css (run this in seperate terminal)
```
Other:
```
* npm run build    builds ts files into js
* npm run style-o  builds tailwind into css
```
## Where is the app running?
here: [localhost:1234](http://localhost:1234)

## Recommendations
* always await a input function (back-end)
```ts
const inputA: string = await input('input A: ');
```
* Use front-end for GUI app and back-end for console app, don't mix it.