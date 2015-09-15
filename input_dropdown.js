function InputDropdown(opts) {
  this.$el = $($(opts.template).html());
  this.$btn = this.$el.find('button');
  this.$menu = this.$el.find('.dropdown-menu');
  this.$input = this.$menu.find('li:first > input');
  this.$itemsContainer = this.$menu.find('.list-group');
  this.$items = null;

  this.setButtonText(opts.label);
  this.setItems(opts.items);

  return this;
}

InputDropdown.prototype.setItems = function(items) {
  var html = '';
  for (var i = 0, l = items.length; i < l; i++) {
    html += '<a href="javascript: void(0);" class="list-group-item">' + items[i] + '</a>';
  }
  this.$itemsContainer.html(html);
  this.$items = this.$itemsContainer.find('.list-group-item');
};

InputDropdown.prototype.setButtonText = function(text) {
  this.$btn.find('.text').text(text);
};

InputDropdown.prototype.appendTo = function(target) {
  this.$el.appendTo(target);
  this.bindEvents();
};

InputDropdown.prototype.bindEvents = function() {
  var self = this;

  this.$input.click(function(event) {
    event.stopPropagation();
  });

  this.$items.click(function() {
    var $a = $(this);
    self.$items.removeClass('active');
    $a.addClass('active');
    self.setButtonText($a.text());
  });

  this.$el.on('shown.bs.dropdown', function() {
    self.$input.focus();
  });

  this.$input.keyup(function() {
    var str = $(this).val();
    if (str.length > 0) {
      self.filterList(str);
    } else {
      self.$items.removeClass('match');
      self.$items.show();
    }
  });
};

InputDropdown.prototype.show = function() {
  var self = this;
  setTimeout(function() {
    self.$btn.dropdown('toggle');
  }, 10);
};

InputDropdown.prototype.filterList = function(str) {
  str = str.toLowerCase();
  this.$items.filter('.match').removeClass('match');
  var itemsLength = this.$items.length;
  var name = '';
  var i = 0;

  for (i = 0; i < itemsLength; i++) {
    name = $(this.$items[i]).text().toLowerCase();

    if (name.indexOf(str) > -1 ) {
      $(this.$items[i]).addClass('match');
    }
  }

  this.$items.not('.match').hide();
  this.$items.filter('.match').show();
};
