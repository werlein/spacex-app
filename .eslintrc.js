module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'react-app',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
    ],
    overrides: [
        {
            files: ["**/cypress/**/*.spec.js", "**/cypress/**/*.spec.ts"],
            rules: {
                "testing-library/await-async-query": 0,
            },
        },
    ],
}
