Chatter = new Mongo.Collection('chatposts');
Nonprofits = new Mongo.Collection('nonprofit');
Messages = new Mongo.Collection('messages');
Teams = new Mongo.Collection('teams');


// SAMPLE DB INSERT: Chatter.insert({name: "Patrick Gilder", topic: "Business Poster", message: "Hey that was a great meeting today, thanks for the invite", project: "4211 Roof", timestamp: "2 Hours Ago"});
// Agencies.insert({nonpeofitName: "Feed My Hungry Children", status: "TechSoup", content: "You've just recently applied for TechSoup.org, once approved you must apply for Google for Nonprofits.", donations: "$132,920", timestamp: "2 Hours Ago", donors: "418", previous: "32"});
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

  Meteor.publish("nonprofit", function () {
    return Nonprofits.find({}, {sort: {createdAt: -1}, limit: 5});
  });

}

/* scrolling code */

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("messages");
  Meteor.subscribe("nonprofit");

  /* helper code */

  /*chat window scrolling*/

  /*events*/

  /*account config*/
}
