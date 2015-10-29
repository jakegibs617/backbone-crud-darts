"use strict";
window.APP = window.APP || {};
APP.UserRouter = Backbone.Router.extend({
  routes: {
    "user/new": "create",
    "users/index": "index",
    "user/:id/edit": "edit"
  },

  initialize: function (options) {
    this.users = options.users;
    // this is debug only to demonstrate how the backbone collection / models work
    this.users.bind('reset', this.updateDebug, this);
    this.users.bind('add', this.updateDebug, this);
    this.users.bind('remove', this.updateDebug, this);
    this.index();
  },

  create: function () {
    this.currentView = new APP.UserNewView({
      users: this.users, user: new APP.UserModel()
    });

    $('#primary-content').html(this.currentView.render().el);
  },

  edit: function (id) {
    var user = this.users.get(id);
    this.currentView = new APP.UserEditView({user: user});
    $('#primary-content').html(this.currentView.render().el);
  },

  index: function () {
    this.currentView = new APP.UserIndexView({
      users: this.users
    });
    $('#primary-content').html(this.currentView.render().el);
    // we would call to the index with
    // this.users.fetch()
    // to pull down the index json response to populate our collection initially
  }
});
