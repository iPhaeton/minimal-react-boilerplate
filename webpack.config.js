const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(process.cwd(), 'app/app.js'),
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'app.bundle.js'
    },
};
