# React + TypeScript + Vite

create react Project 
```js
vishan@vishan-Inspiron-15-3567:~/Documents$ npm create vite@latest
│
◇  Project name:
│  sampleReact
│
◇  Package name:
│  react
│
◇  Select a framework:
│  React
│
◇  Select a variant:vishan@vishan-Inspiron-15-3567:~/Documents$ npm create vite@latest
│
◇  Project name:
│  sampleReact
│
◇  Package name:
│  react
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Scaffolding project in /home/vishan/Documents/sampleReact...
│
└  Done. Now run:

  cd sampleReact
  npm install
  npm run dev

vishan@vishan-Inspiron-15-3567:~/Documents$ cd sampleReact
vishan@vishan-Inspiron-15-3567:~/Documents/sampleReact$ npm install

added 259 packages, and audited 260 packages in 4m

61 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
vishan@vishan-Inspiron-15-3567:~/Documents/sampleReact$ 

│  TypeScript
│
◇  Scaffolding project in /home/vishan/Documents/sampleReact...
│
└  Done. Now run:

  cd sampleReact
  npm install
  npm run dev

vishan@vishan-Inspiron-15-3567:~/Documents$ cd sampleReact
vishan@vishan-Inspiron-15-3567:~/Documents/sampleReact$ npm install

added 259 packages, and audited 260 packages in 4m

61 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
vishan@vishan-Inspiron-15-3567:~/Documents/sampleReact$ 

```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

intall talwind css
![image](https://github.com/user-attachments/assets/355e1e1b-b706-438b-a97f-0c760a227a78)

