# EscApps ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @escapps/esc-set 
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@escapps/esc-set/next", 
    "next/core-web-vitals"
  ]
}
```

### React (without Next.js)

Install dependencies:
```
npm i -D eslint @escapps/esc-set
```
Inside `.eslintrc.json`
```
{
  "extends": "@escapps/esc-set/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @escapps/esc-set 
```
Inside `.eslintrc.json`
```
{
  "extends": "@escapps/esc-set/node"
}
```
