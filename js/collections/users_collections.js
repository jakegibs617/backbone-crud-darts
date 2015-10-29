APP.UserList = Backbone.Collection.extend({
  model: APP.User,
  // comparator: function(item) {
  //   return item.get('score');
  // },
  localStorage: new Store("backbone-darts-app")
});
// instance of the Collection
APP.userList = new APP.UserList();