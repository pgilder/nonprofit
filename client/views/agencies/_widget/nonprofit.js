
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
   }
 });
