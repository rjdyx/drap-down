// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // 配置4个空格一个缩进，不符合配置时报错
        "indent": ["error", 4],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // allow 未使用的变量
        'no-unused-vars': 0,
        // 允许使用未声明的变量，除非在/*global */注释中提及
        'no-undef': 0,
        // 允许使用eval
        'no-eval': 0,
        // Disallow Assignment in return Statement
        'no-return-assign': 0,
        // 允许混用tab和空格
        "no-mixed-spaces-and-tabs": [2, false],
        // Disallow camelcase naming convention
        'camelcase': ['error', {properties: 'never'}],
        // allow the Promise rejection reason not to be an Error
        'prefer-promise-reject-errors': 0
    }
}
