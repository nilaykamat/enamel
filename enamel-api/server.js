var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router

var users = [
	{name : 'nilay', status: true},
	{name : 'abhijit', status: true},
	{name : 'keegan', status: false},
	{name : 'mohit', status: true},
	{name : 'kalpesh', status: false},
];
router.use(function(req, res, next) {
	// console.log(req.headers);
	console.log('MiddleWare for authentication');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/users').get((req, res) => {
	res.json(users);
}).post((req, res) => {
	users.push(req.body);
	res.json({message: 'Welcome to enamel API'});
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to enamel API' });   
});

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('Server running on port:' + port + '. Go to http://localhost:8080/api/');