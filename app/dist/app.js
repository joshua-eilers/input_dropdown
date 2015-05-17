(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./modules/input_dropdown/input_dropdown.js":2}],2:[function(require,module,exports){


module.exports = InputDropdown;

function InputDropdown(opts) {
	var html = "<div class=\"dropdown input-dropdown\">\n\t<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n\t\t<span class=\"dropdown-btn-text\"><%= buttonName %></span>\n\t\t&nbsp<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu\" role=\"menu\">\n\t\t<li>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n\t\t</li>\n\t\t<li class=\"dropdown-content\">\n\t\t\t<div class=\"list-group\" style=\"margin-bottom: 0px;\"></div>\n\t\t</li>\n\t</ul>\n</div>\n";
	var compiled = _.template(html);
	this.opts = opts;
	this.$el = $(compiled({ buttonName: opts.buttonName }));
}

InputDropdown.prototype.appendTo = function(target) {
	$(target).append(this.$el);
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL21haW4uanMiLCJhcHAvc3JjL21vZHVsZXMvaW5wdXRfZHJvcGRvd24vaW5wdXRfZHJvcGRvd24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBJbnB1dERyb3Bkb3duID0gcmVxdWlyZSgnLi9tb2R1bGVzL2lucHV0X2Ryb3Bkb3duL2lucHV0X2Ryb3Bkb3duLmpzJyk7XG5cbnZhciBhcHBsaWNhdGlvblN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdHZhciBpdGVtcyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdGl0ZW1zLnB1c2goeyB0ZXh0OiBcInRleHRcIiArIGksIHZhbDogaSB9KTtcblx0fVxuXG5cdC8vIHZhciB0ZW1wbGF0ZSA9IGlucHV0RHJvcGRvd24udGVtcGxhdGUoJ0NsaWNrIG1lJywgaXRlbXMpO1xuXHQvLyAkKCcjbWFpbi1jb250ZW50LWFyZWEnKS5odG1sKHRlbXBsYXRlKTtcblx0Ly8gaW5wdXREcm9wZG93bi5pbml0KCQoJyNtYWluLWNvbnRlbnQtYXJlYSA+IC5kcm9wZG93bicpKTtcblxuXHR2YXIgaW5wdXREcm9wZG93biA9IG5ldyBJbnB1dERyb3Bkb3duKHtcblx0XHRidXR0b25OYW1lOiAnQ2xpY2sgbWUnLFxuXHRcdGl0ZW1zOiBpdGVtc1xuXHR9KTtcblxuXHRpbnB1dERyb3Bkb3duLmFwcGVuZFRvKCcjbWFpbi1jb250ZW50LWFyZWEnKTtcbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGFwcGxpY2F0aW9uU3RhcnQpO1xuIiwiXG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXREcm9wZG93bjtcblxuZnVuY3Rpb24gSW5wdXREcm9wZG93bihvcHRzKSB7XG5cdHZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBpbnB1dC1kcm9wZG93blxcXCI+XFxuXFx0PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgZHJvcGRvd24tdG9nZ2xlXFxcIiBkYXRhLXRvZ2dsZT1cXFwiZHJvcGRvd25cXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIj5cXG5cXHRcXHQ8c3BhbiBjbGFzcz1cXFwiZHJvcGRvd24tYnRuLXRleHRcXFwiPjwlPSBidXR0b25OYW1lICU+PC9zcGFuPlxcblxcdFxcdCZuYnNwPHNwYW4gY2xhc3M9XFxcImNhcmV0XFxcIj48L3NwYW4+XFxuXFx0PC9idXR0b24+XFxuXFx0PHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG5cXHRcXHQ8bGk+XFxuXFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2guLi5cXFwiPlxcblxcdFxcdDwvbGk+XFxuXFx0XFx0PGxpIGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbTogMHB4O1xcXCI+PC9kaXY+XFxuXFx0XFx0PC9saT5cXG5cXHQ8L3VsPlxcbjwvZGl2PlxcblwiO1xuXHR2YXIgY29tcGlsZWQgPSBfLnRlbXBsYXRlKGh0bWwpO1xuXHR0aGlzLm9wdHMgPSBvcHRzO1xuXHR0aGlzLiRlbCA9ICQoY29tcGlsZWQoeyBidXR0b25OYW1lOiBvcHRzLmJ1dHRvbk5hbWUgfSkpO1xufVxuXG5JbnB1dERyb3Bkb3duLnByb3RvdHlwZS5hcHBlbmRUbyA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHQkKHRhcmdldCkuYXBwZW5kKHRoaXMuJGVsKTtcbn07Il19
