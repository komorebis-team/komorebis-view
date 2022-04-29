const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'public/dist/bundle.js',
        publicPath: "/"
    },
    devServer: {
        static: './dist',
        historyApiFallback: true,
        port: process.env.PORT || 8080,
        allowedHosts: 'all'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] // include eslint-loader
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};