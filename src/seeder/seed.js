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
		var translator = getRandomString(8);
		var category = getRandomCategory();
		var abstract = '  کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
		data.push({ translator, abstract, user, author, book, category, image: `images/books/book${Math.floor(Math.random() * 4) + 1}.png` });
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