const configWebpack = {
    entry: './src/js/index.js',    //Punto de entrada
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
            }
        ]
    }
};

module.exports = configWebpack;
