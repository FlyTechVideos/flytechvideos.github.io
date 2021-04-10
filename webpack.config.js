const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jp(e?)g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash:8].[ext]',
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },
        ],
    },
};
