let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let registerRoutes = require('./routes/index');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.site = {
  name: 'Ontario Tech Lost and Found'
};

registerRoutes(app);
module.exports = app;
