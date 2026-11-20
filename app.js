let express = require('express');
let path = require('path');
let indexRouter = require('./routes/index');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.locals.site = {
  name: 'Ontario Tech Lost and Found'
};

app.use('/', indexRouter);
module.exports = app;