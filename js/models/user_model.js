
"use strict";
APP.UserModel = Backbone.Model.extend({
  // you can set any defaults you would like here
  defaults: {
    name: "",
    score: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.name) errors.name = "please enter name";
    if (!attrs.score) errors.score = "please enter score";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }
});

APP.UserCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
   comparator: function(item) {
      return item.get('score');
    },
  model: APP.UserModel
});
