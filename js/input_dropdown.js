input_dropdown = function() {
	// cache references to primary ui components
	var ui = {
		$dropdown: null,
		$menu: null,
		$input: null,
		$items: null
	};

	var init = function($d) {
		// cache references to this dropdown and its parts
		ui.$dropdown = $d;
		ui.$menu = ui.$dropdown.find('ul.dropdown-menu');
		ui.$input = ui.$menu.find('li:first > input');
		ui.$items = ui.$menu.find('.list-group-item');

		// prevent closing the dropdown when clicking the input
		ui.$input.click(function(event) {
			event.stopPropagation();
		});

		// update the button text with the item clicked
		ui.$items.click(function() {
			var $a = $(this);
			ui.$items.removeClass('active');
			$a.addClass('active');
			var clickedText = $a.children().eq(0).text();
			ui.$dropdown.find('.dropdown-btn-text').text(clickedText);
		});

		// focus the input when showing the dropdown
		ui.$dropdown.on('shown.bs.dropdown', function() {
			ui.$input.focus();
		});

		ui.$input.keyup(function() {
			var str = $(this).val();
			if (str.length > 0) {
				filterList(str);
			} else {
				ui.$items.removeClass('match');
				ui.$items.show();
			}
		});
	};

	// programatically show the dropdown
	var show = function() {
		setTimeout(function() {
			ui.$dropdown.find('.dropdown-toggle').dropdown('toggle');
		}, 10);
	};

	// function to filter the dropdown list based on input
	var filterList = function(str) {
		str = str.trim().toLowerCase();
		ui.$items.filter('.match').removeClass('match');

		ui.$items.filter(function() {
			return $(this).text().toLowerCase().indexOf(str) >= 0;
		}).addClass('match').show();

		ui.$items.not('.match').hide();
	};

	// constructs the markup for a dropdown
	var template = function(defaultButtonName, items) {
		var html = '' +
			'<div class="dropdown">' +
				'<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">' +
					'<span class="dropdown-btn-text">' + defaultButtonName + '</span>' +
					'&nbsp<span class="caret"></span>' +
				'</button>' +
				'<ul class="dropdown-menu" role="menu">' +
					'<li>' +
						'<input type="text" class="form-control" placeholder="Search...">' +
					'</li>' +
					'<li class="dropdown-content">' +
						'<div class="list-group" style="margin-bottom: 0px;">' +
							constructListItems(items) +
						'</div>' +
					'</li>' +
				'</ul>' +
			'</div>';

		return html;
	};

	// constructs all the markup for the elements in the dropdown
	var constructListItems = function(items) {
		var html = '';
		for (var i = 0, l = items.length; i < l; i++) {
			html += '' +
				'<a href="javascript: void(0);" class="list-group-item">' +
					'<span>' + items[i].text + '</span>' +
					'<input type="hidden" value="' + items[i].val + '">';
				'</a>';
		}

		return html;
	};

	return {
		init: init,
		show: show,
		template: template
	};
};