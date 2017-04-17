
var path=require('path');
var combineLoaders = require('webpack-combine-loaders');

var BUILD_DIR=path.resolve(__dirname,'scripts');
var APP_DIR=path.resolve(__dirname,'app');
console.log(APP_DIR);
var config={
    entry:APP_DIR +'/index.jsx',
    output:{
        path:BUILD_DIR,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx$/,
                include:APP_DIR,
                loader:'babel-loader',
            },
            {
                test:/\.js$/,
                include:APP_DIR,
                loader:'babel-loader',
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            }, {
                test: /\.woff2$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            }, {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                loader: combineLoaders([ 
                    {
                        loader:'style-loader'
                    }, 
                    {
                        loader:'css-loader',
                        options: {
                            camelCase: true,
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        },
                    } 
                    ])
            }            
        ]
    }
};

module.exports=config;