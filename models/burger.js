//Import
var orm = require("../config/orm.js");

//Models uses specific input to call ORM functions
var burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	create: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	},
	delete: function (condition, cb) {
		orm.deleteOne('burgers', condition, function (res) {
			cb(res);
		});
	}
};

//Export ORM
module.exports = burger;