Meteor.startup(function () {
  if (Nonprofits.find().count() === 0) {
    [
      {name: "Barcelona"},
      {name: "Real Madrid"},
      {name: "Matt's team"}
    ].forEach(function(team){
      Nonprofits.insert(team);
    });
  }
});
