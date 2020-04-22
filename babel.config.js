module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                // modules: false,
                targets: {
                    node: '10',
                },
            },
        ],
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        'inline-react-svg',
        [
            'babel-plugin-styled-components',
            {
                ssr: true,
                displayName: true,
                // preprocess: false,
            },
        ],
    ],
    exclude: 'node_modules/**',
}
