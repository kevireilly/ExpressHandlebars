var express = require('express'),
    app = express(),
    expressHbs = require('express-handlebars'),
    port = process.env.PORT || 8080;

// Serve static files from the public directory
// Images, JavaScript, CSS, HTML, etc
app.use(express.static(__dirname + '/public'));

// Setup the Handlebars template engine
app.engine('hbs', expressHbs({
  extname:'hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout:'main.hbs'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Handle index requests
app.get('/', function(req, res){
  console.log('index.hbs loaded');
  res.render('index', {
    page: 'Main page',
    foo: 'bar'
  });
});

// Handle other/page requests
app.get('/other/page', function(req, res){
  console.log('otherpage.hbs loaded');
  res.render('otherpage', {
    page: 'Other page',
    foo: 'baz'
  });
});

// Listen on port 8080
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
