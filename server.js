const express = require('express'); //requiero a express
const app = express();

app.use(express.static(__dirname + '/public')); //Indico el punto de entrada

app.listen('3000',function(){   //INdico el port
    console.log('Funcionando en port 3000');
});


//Para levantar correr via node.
