Meteor.publish("loggedUser", function () {
  return Meteor.users.find({});
});
