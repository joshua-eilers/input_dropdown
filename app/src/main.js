var InputDropdown = require('./modules/input_dropdown/input_dropdown.js');

var applicationStart = function() {
	var items = [];

	for (var i = 0; i < 10; i++) {
		items.push({ text: "text" + i, val: i });
	}

	// var template = inputDropdown.template('Click me', items);
	// $('#main-content-area').html(template);
	// inputDropdown.init($('#main-content-area > .dropdown'));

	var inputDropdown = new InputDropdown({
		buttonName: 'Click me',
		items: items
	});

	inputDropdown.appendTo('#main-content-area');
};

$(document).ready(applicationStart);
