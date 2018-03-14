switch (process.env.NODE_ENV) {
    case 'development': {
        const options = require('./options.dev');
        module.exports = require('./webpack.base')(options);
        break;
    }
    default: {
        const options = require('./options.prod');
        module.exports = require('./webpack.base')(options);
        break;
    }
}