var fs = require('fs');
var stream = fs.createWriteStream("../database/data.json");
stream.once('open', function(fd) {
	var data = [];
	var length = 1000;
	if (
			process.argv[2] &&
			(parseInt(process.argv[2]) < 3000 && parseInt(process.argv[2]) > 0)
	) {
		length = process.argv[2];
	}
	for (var i = 0; i <= length; i++) {
		var user = getRandomString(5);
		var author = getRandomString(6);
		var book = getRandomString(7);
		var category = getRandomCategory();
		data.push({ user, author, book, category });
	}
	data = JSON.stringify(data);

	stream.write(data);
	stream.end();
});

function getRandomString(rand) {
	return Math.random().toString(36).substring(rand);
}
function getRandomCategory() {
	var randCat = Math.random(2).toString().substring(Math.random(2).toString().length - 1);
	if (randCat === "") {
		return '0';
	} else {
		return randCat;
	}
}