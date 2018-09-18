

 Template.agencies.helpers({
 	'agencies': function(){
 		return Nonprofits.find()
 		{
       if (index === 0)
         nonprofit.isFirst = true;

       return nonprofit;
     };
 	},
 });



 Template.agencies.helpers({
     recentAgencies: function () {
       return Nonprofits.find({}, {sort: {createdAt: 1}});
     },
     /* unread message helper */
   });

/** Rendered Initialisation */
Template.agencies.onRendered(function () {
	var tpl = this;
	// tpl.$(".fooJqueryPlugin").initialise()
	// Init portlets

	var bars = $('.widget-loader-bar');
	var circles = $('.widget-loader-circle');
	var circlesLg = $('.widget-loader-circle-lg');
	var circlesLgMaster = $('.widget-loader-circle-lg-master');


	bars.each(function () {
		var elem = $(this);
		elem.portlet({
			progress: 'bar',
			onRefresh: function () {
				setTimeout(function () {
					elem.portlet({
						refresh: false
					});
				}.bind(this), 2000);
			}
		});
	});


	circles.each(function () {
		var elem = $(this);
		elem.portlet({
			progress: 'circle',
			onRefresh: function () {
				setTimeout(function () {
					elem.portlet({
						refresh: false
					});
				}.bind(this), 2000);
			}
		});
	});

	circlesLg.each(function () {
		var elem = $(this);
		elem.portlet({
			progress: 'circle-lg',
			progressColor: 'white',
			overlayColor: '0,0,0',
			overlayOpacity: 0.6,
			onRefresh: function () {
				setTimeout(function () {
					elem.portlet({
						refresh: false
					});
				}.bind(this), 2000);
			}
		});
	});


	circlesLgMaster.each(function () {
		var elem = $(this);
		elem.portlet({
			progress: 'circle-lg',
			progressColor: 'master',
			overlayOpacity: 0.6,
			onRefresh: function () {
				setTimeout(function () {
					elem.portlet({
						refresh: false
					});
				}.bind(this), 2000);
			}
		});
	});

});

/** Template Helpers */
 /*
Template.agencies.helpers({
	// Register template helpers with arguments {{foo "John" "Doe" title="President"}}
	// foo: function (first, last, keyword) { return keyword.hash.title + firstName + " " + lastName; }

});
*/

/** jQuery Events */

 /*
Template.agencies.events({
	// Fires when 'accept' is clicked or focused, or a key is pressed
	// 'click .accept, focus .accept, keypress': function (event) { ... }

});
*/

/** Set-Up Subscriptions and Registrations */
 /*
Template.agencies.onCreated(function () {
	var tpl = this;
	// set up subscriptions, local reactive variables, registrations
	// tpl.subscribe("notifications");
});
*/


/** De-Registrations */

 /*
Template.agencies.onDestroyed(function () {
	var tpl = this;
	// de-registration

});
*/
