
"use strict";
APP.UserModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    name: "",
    score: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.name) errors.name = "Hey! Give this thing a name.";
    if (!attrs.score) errors.score = "Put your name in dumb dumb...";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }
});

APP.UserCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  model: APP.UserModel
});
