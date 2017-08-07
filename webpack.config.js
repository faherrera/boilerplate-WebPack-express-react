var ExtractTextPlugin = require('extract-text-webpack-plugin'); //Extractor de texto .

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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/master.css"),
    ]
};

module.exports = configWebpack;
