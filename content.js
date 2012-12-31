function doFromage() {
	var url = location.href;

	if (url.indexOf('newegg.com/') < 0 || url.indexOf('Item=') < 0) return;

	var item = url.match(/Item=(\w+)/)[1].toLowerCase();
	if (item[item.length - 1] !== 'r') {
		item += 'r';
	}

	try {
		var request = new XMLHttpRequest();
		request.open("GET", 'http://www.ows.newegg.com/Products.egg/' + item, false);
		request.send(null);
	} catch (error) {
		return;
	}
	
	var data = JSON.parse(request.responseText);
	var finalPrice = data['FinalPrice'];
	if (!finalPrice || finalPrice === '$0.00') return;

	var priceDivs = document.getElementsByClassName('price-main-product');
	if (!priceDivs) return;

	var obPriceDiv = document.createElement('div');
	obPriceDiv.style.background = '#22DD22';
	obPriceDiv.style.fontSize = '1.4em';
	obPriceDiv.innerHTML = 'Last OpenBox Price: <em>' + finalPrice + '</em>&nbsp;&nbsp;';
	
	for (var div in priceDivs) {
		priceDivs[div].appendChild(obPriceDiv);
	}
}

doFromage();