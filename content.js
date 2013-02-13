function doFromage() {
	var url = location.href,
		obPage = false;

	if (url.indexOf('newegg.com/') < 0 || url.indexOf('Item=') < 0) return;

	var item = url.match(/Item=(\w+)/)[1].toUpperCase();
	if (item[item.length - 1] !== 'R') {
		item += 'R';
	} else {
		obPage = true;
	}

	try {
		var request = new XMLHttpRequest();
		request.open("GET", 'http://www.ows.newegg.com/Products.egg/' + item, false);
		request.send(null);
	} catch (error) {
		return;
	}
	
	var data = JSON.parse(request.responseText);
	var finalPrice = data['FinalPrice'],
		activated = data['IsActivated'];

	// don't show the div on active OB item pages
	if (activated === true && obPage === true) {
		return;
	}

	// couldn't get the most recent price
	if (!finalPrice || finalPrice === '$0.00') {
		return;
	}

	var priceDivs = document.getElementsByClassName('price-main-product');

	// in case newegg's item pages change
	if (!priceDivs) {
		return;
	}

	var obPriceDiv = document.createElement('div');
	obPriceDiv.class = 'price-current';
	obPriceDiv.style['font-size'] = '1.3em';
	obPriceDiv.style['padding'] = '0 10px';

	if (activated) {
		var baseItemUrl = 'http://www.newegg.com/Product/Product.aspx?Item=';

		obPriceDiv.style['color'] = 'black';
		obPriceDiv.style['background'] = '#32FF17';
		obPriceDiv.style['text-decoration'] = 'underline';
		obPriceDiv.innerHTML = '<a href="' + baseItemUrl + item + '">' +
			'Current OpenBox Price: <strong>' + finalPrice + '</strong>';
	} else {
		obPriceDiv.style['color'] = 'blue';
		obPriceDiv.style['background'] = '#F0F0F0';
		obPriceDiv.innerHTML = 'Last OpenBox Price: <strong>' + finalPrice + '</strong>';
	}
	
	for (var div in priceDivs) {
		priceDivs[div].appendChild(obPriceDiv);
	}
}

doFromage();