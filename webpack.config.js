const path = require('path');

const CSSModuleLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: "[name]__[local]___[hash:base64:5]",
        },
    }
};

const styleLoader = 'style-loader';

const CSSLoader = {
    loader: 'css-loader',
    options: {
        modules: "global",
        importLoaders: 2,
        sourceMap: false, // turned off as causes delay
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.css$/,
            use: [ styleLoader, CSSModuleLoader ]
        }]
    },
    externals: {
        'react': 'commonjs react'
    }
};