var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function () {
  console.log('Example app listening on port '+ app.get('port'));
});
