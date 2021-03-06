var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var burger = require("../models/burger.js");

var router = express.Router();

router.get('/', function(req, res) {
		res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
		burger.all(function (data) {
			var hbsObject = { burgers: data };
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
});

router.post('/create', function(req, res) {
		// console.log(req.body.burger_name, "=new burger name")
		burger.create(['burger_name'], [req.body.name], function(result) {
			console.log("controller result", result)
			res.redirect('/burgers');
		});
});

router.put('/burgers/update/:id', function (req, res) {
		var condition = 'id = ' + req.params.id;

		console.log('condition', condition);

		burger.update({ devoured: req.body.devoured }, condition, function() {
			res.redirect('/burgers');
		});
});

router.delete('/burgers/delete/:id', function(req, res) {
	var condition = "id = " + req.params.id;

	burger.delete(condition, function() {
		res.redirect('/burgers');
	});
});


module.exports = router;












