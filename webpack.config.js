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
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                        },
                    }
                }]
        },{
            test: /\.(pdf|jpg|png|gif|svg|ico)$/,
            use: [{
                    loader: 'url-loader'
                }]
        }]
    },
    externals: {
        'react': 'commonjs react'
    }
};