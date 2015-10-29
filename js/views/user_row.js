"use strict";
APP.UserRowView = Backbone.View.extend({
  // the wrapper defaults to div, so only need to set this if you want something else
  // like in this case we are in a table so a tr
  tagName: "tr",
  // functions to fire on events

  // the constructor
  initialize: function (options) {
    // model is passed through
    this.user  = options.user;
    this.users = options.users;
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(_.template($('#rowTemplate').html(), this.user.toJSON()));
    return this;
  }
});
