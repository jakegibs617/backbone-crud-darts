
"use strict";
APP.UserEditView = Backbone.View.extend({
  // functions to fire on events
  events: {
    "click button.save": "save"
  },

  // the constructor
  initialize: function (options) {
    this.user  = options.user;
  },

  save: function (event) {
    // this keeps the form from submitting
    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.user.set({
      name: this.$el.find('input[name=name]').val(),
      score: this.$el.find('input[name=score]').val(),
    });
    // we would save to the server here with
    // this.user.save();
    // redirect back to the index
    window.location.hash = "users/index";
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(_.template($('#formTemplate').html(), this.user.toJSON()));
    return this;
  }
});
