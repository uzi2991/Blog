---
slug: set-up-an-express-project-with-typescript
title: How to set up an Express project with Typescript
categories: ["typescript", "express"]
description: Use Typescript in your express project to make it scalable and maintainable
createdAt: 2022-07-01
---

In this post, I'll show you how to set up a new `express` project with `typescript`

## Create a new project

Let's get started by making a new folder and generate a `package.json` file

```cmd
mkdir express-typescript
cd express-typescript
npm init -y
```

## Set up `typescript`

Add `typescript` as a project's dev dependency and generate a new `tsconfig.json`

```cmd
npm install --save-dev typescript
npx tsc --init
```

In the `tsconfig.json` file, change the two following options under `compilerOptions`

```json
"compilerOptions": {
  "rootDir": "./src",
  "outDir": "./dist"
}
```

Now, `src` will be where we write our source codes, and all the compiled files will go to `dist`

## Create a server with `express`

Now let's add `express` and some type definition packages to our project

```cmd
npm install express
npm install --save-dev @types/express @types/node
```

create `index.ts` in `src` file with the following code

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from express');
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
```

## Run our project

Install `nodemon` and `ts-node` so we can watch and run `typescript` files easier

```cmd
npm install --save-dev nodemon ts-node
```

Let's create some scripts in our `package.json`

```json
"scripts": {
  "dev": "nodemon src/index.ts",
  "build": "tsc -p .",
  "start": "node dist/index.js"
}
```

Now, run `npm run dev` and everything is working fine.  
If you want to build the project, just run `npm run build` and then run `npm run start` to start
