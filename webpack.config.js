//Requires
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //Extractor de texto .
var HtmlWebpackPlugin = require('html-webpack-plugin');


//Config Requires
const extractSass = new ExtractTextPlugin({
    filename: "../css/master.css"
});

//Config Webpack
const configWebpack = {
    entry: './src/index.js',    //Punto de entrada
    output:{    //Configurando salida.
        path: __dirname + '/public/js',    //Lugar donde depositamos el archivo transpilado
        filename: 'bundle.js',
    },
    module:{    //COnfiguracion de modulos
        rules:[ //reglas    para los modulos, loaders ,etc
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
                })
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            // title: 'Titulo EJS con webpack',    //Generando el titulo
            filename: '../index.html',          //Generando el nombre y el lugar donde estará la salida html (..)
            template: './src/index.pug',   //Indicando donde y cualñ es el template que vamos a utilizar
            inject: 'body'                      //Agregando la etiqueta body
        })
    ]
};

module.exports = configWebpack;
