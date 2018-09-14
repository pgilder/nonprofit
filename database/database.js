Chatter = new Mongo.Collection('chatposts');

// SAMPLE DB INSERT: Chatter.insert({name: "Patrick Gilder", topic: "Business Poster", message: "Hey that was a great meeting today, thanks for the invite", project: "4211 Roof", timestamp: "2 Hours Ago"});

Meteor.methods({
  sendMessage: function (messageText) {
    /* add authentication here */

    Chatter.insert({
      message: messageText,
      createdAt: new Date(),
      name: "User's Name Here",
      topic: "Topic Name Here",
      location: "Location Name Here",
      project: "Project Name Here"

    });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("messages", function () {
    return Chatter.find({}, {sort: {createdAt: -1}, limit: 5});
  });
}

/* scrolling code */

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("messages");

  /* helper code */

  /*chat window scrolling*/

  /*events*/

  /*account config*/
}
