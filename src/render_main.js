var SHA3 = require('crypto-js/sha3')


var getMain = function(req, res) {
	res.render('list.ejs', {
	difficulty: difficulty, grid: grid});
};

var routes = {
	get_main : getMain
};

module.exports = routes;		