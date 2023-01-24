module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'airbnb-base',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow paren-less arrow functions
        'arrow-parens': 'off',
        'one-var': 'off',
        'no-unused-vars': 'warn',

        'import/first': 'off',
        'import/named': 'error',
        'import/namespace': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'prefer-promise-reject-errors': 'off',

        // allow debugger during development only
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': 'warn',

        semi: [ 'error', 'always' ],
        quotes: [ 'error', 'single' ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionDeclaration: { parameters: 'first' },
                FunctionExpression: { parameters: 'first' },
                CallExpression: { arguments: 'first' },
            },
        ],
        'vue/html-indent': [ 'error', 4 ],
        'no-var': 'error',
        'no-tabs': [ 'error' ],
        'no-trailing-spaces': 'error',
        'eol-last': [ 'error', 'always' ],
        'linebreak-style': [ 'error', 'unix' ],
        'one-var-declaration-per-line': [ 'error', 'always' ],
        'function-paren-newline': [ 'error', 'multiline' ],
        'object-curly-newline': [ 'error', { consistent: true } ],
        'space-unary-ops': 'error',
        'space-before-function-paren': 'error',
        'space-infix-ops': [ 'error', { int32Hint: false } ],
        'key-spacing': [ 'error', { afterColon: true } ],
        'keyword-spacing': 'error',
        'lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
        'brace-style': 'error',
        'array-element-newline': [ 'error', 'consistent' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        'no-extra-semi': 'error',
        'semi-spacing': [
            'error', {
                before: false,
                after: true,
            },
        ],
        'no-mixed-operators': [ 'error' ],
        'object-curly-spacing': [ 'error', 'always', { objectsInObjects: true } ],
        'array-bracket-spacing': [ 'error', 'always', { singleValue: true } ],
        'newline-before-return': 'error',
        'no-useless-catch': 'off',
        'default-case-last': 'off',
        'no-unused-expressions': 'error',
    },
};
