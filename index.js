const express = require('express');

let app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.listen(3000, function() {
    console.log('TITTIES!!!');
});