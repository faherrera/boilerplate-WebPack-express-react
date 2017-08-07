//Requires
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //Extractor de texto .

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
        }
        ]
    },
    plugins: [
        extractSass
    ]
};

module.exports = configWebpack;
