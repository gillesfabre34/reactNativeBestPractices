module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'flowtype'],
    rules: {
        curly: 0,
    },
    env: {
        jest: true,
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
};
