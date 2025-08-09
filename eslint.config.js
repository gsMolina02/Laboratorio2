export default [
    {
        files : ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
    },
    //Reglas sencillas
    rules:{
        semi: ['error', 'always'],
        quotes: ['error', 'single']
        }
    }
];