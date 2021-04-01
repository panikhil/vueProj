const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports ={
    entry:'./main.js',
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader'},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.css$/,use:['vue-style-loader','style-loader']},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }

        ]
    },
    devServer:{
        open:true,
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html', }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ]

}


