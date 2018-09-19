
 /*Template.nonprofit.helpers({
   nonprofit: [
		 {name: "Patrick Gilder"},
		 {nonpeofitName: "Feed My Hungry Children"},
		 {status: "TechSoup"},
		 {content: "Demo content here"},
		 {donations: "donations"},
		 {timestamp: "timestamp"},
		 {donors: "donors"},
		 {previous: "previous amount"},
   ]
 });
 */

 Template.nonprofit.helpers({
   nonprofit: function(){
     return Nonprofits.find();
   },

   'selectedClass': function(){
    return "selected";
   }
 });


 Template.nonprofit.events({
    'click .nonprofititem': function(){
      var nonprofitId = this._id;
    Session.set('selectedNonprofit', nonprofitId);
    var selectedNonprofit = Session.get('selectedNonprofit');
    console.log(selectedNonprofit);
    }
 });
