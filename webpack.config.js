const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'app/app.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'app.bundle.js'
    },
};
