var fs = require('fs');

module.exports = InputDropdown;

function InputDropdown(opts) {
	var html = fs.readFileSync(__dirname + '/input_dropdown.html', 'utf8');
	var compiled = _.template(html);
	this.opts = opts;
	this.$el = $(compiled({ buttonName: opts.buttonName }));
}

InputDropdown.prototype.appendTo = function(target) {
	$(target).append(this.$el);
};