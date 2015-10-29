
"use strict";
APP.UserShowView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    this.user = options.user;
  }



  // populate the html to the dom
  // render: function () {
  //   this.$el.html(_.template($('#showTemplate').html(), this.user.toJSON()));
  //   return this;
  // }
});

