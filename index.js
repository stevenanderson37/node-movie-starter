var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/movies', movieCtrl.get);
app.put('/api/movies', movieCtrl.modify);
app.post('/api/movies', movieCtrl.add);
app.delete('/api/movies', movieCtrl.delete);


var port = 3000;
app.listen(port, function(){
    console.log('listening on ' + port);
})