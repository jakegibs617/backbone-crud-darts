
"use strict";
APP.UserNewView = Backbone.View.extend({
  // functions to fire on events
  events: {
    "click button.save": "save"
  },

  // the constructor
  initialize: function (options) {
    this.user  = options.user;
    this.users = options.users;
    this.user.bind('invalid', this.showErrors, this);
  },

  showErrors: function (user, errors) {
    this.$el.find('.error').removeClass('error');
    this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
    // highlight the fields with errors
    _.each(_.keys(errors), _.bind(function (key) {
      this.$el.find('*[name=' + key + ']').parent().addClass('error');
    }, this));
  },

  save: function (event) {
    event.stopPropagation();
    event.preventDefault();

    // update our model with values from the form
    this.user.set({
      name: this.$el.find('input[name=name]').val(),
      score: this.$el.find('input[name=score]').val(),
      // just setting random number for id would set as primary key from server
      id: Math.floor(Math.random() * 100) + 1
    });
    if (this.user.isValid()){
      // add it to the collection
      this.users.add(this.user);
      // this.user.save();
      // redirect back to the index
      window.location.hash = "users/index";
    }
  },

  // populate the html to the dom
  render: function () {
    this.$el.html(_.template($('#formTemplate').html(), this.user.toJSON()));
    return this;
  }
});
