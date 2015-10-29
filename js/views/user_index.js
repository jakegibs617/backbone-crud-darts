
"use strict";
APP.UserIndexView = Backbone.View.extend({
  // the constructor
  initialize: function (options) {
    // model is passed through
    this.users = options.users;
    this.users.bind('reset', this.addAll, this);
  },

  events: {
    "click a.deleteall": "destroy"
  },

  destroy: function (event) {
    console.log("made it here")

    // event.preventDefault();
    // event.stopPropagation();
    // we would call
    // this.model.destroy();
    // which would make a DELETE call to the server with the id of the item
    this.users.remove(this.user);
    this.$el.remove();
  },
  // populate the html to the dom
  render: function () {
    this.$el.html($('#indexTemplate').html());
    this.addAll();
    return this;
  },

  addAll: function () {
    // clear out the container each time you render index
    this.$el.find('tbody').children().remove();
    _.each(this.users.models, $.proxy(this, 'addOne'));
  },

  addOne: function (user) {
    var view = new APP.UserRowView({
      users: this.users, 
      user: user
    });
    this.$el.find("tbody").append(view.render().el);
  }
});

