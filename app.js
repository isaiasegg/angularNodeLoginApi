const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv'); dotenv.load(); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });  

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('json spaces', 2);

const routes = require('./api/routes/routes'); 
routes.all(app);

// Server static files from /browser
app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// Sets server port and logs message on success
let server = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port %s', server.address().port);
});


