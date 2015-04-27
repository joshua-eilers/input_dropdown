var InputDropdown = require('./input_dropdown.js');

$(document).ready(function() {
	var inputDropdown = new InputDropdown();
	var items = [];

	for (var i = 0; i < 10; i++) {
		items.push({ text: "text" + i, val: i });
	}

	var template = inputDropdown.template('Click me', items);
	$('#container').html(template);
	inputDropdown.init($('#container > .dropdown'));
});
