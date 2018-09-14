Template.timeline.onRendered(function () {
	var $timeline_block = $('.timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.timeline-point, .timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-point').hasClass('is-hidden') ) {
				$(this).find('.timeline-point, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});

// Test Feature with "Chatter.insert({ name: "Name Here", score: Number Here , message: "Message Here",});"
Template.timeline.helpers({
	'chatposts': function(){
		return Chatter.find()
		{
      if (index === 0)
        chatposts.isFirst = true;

      return chatposts;
    };
	},
});



Template.timeline.helpers({
    recentChatter: function () {
      return Chatter.find({}, {sort: {createdAt: 1}});
    },
    /* unread message helper */
  });

	Template.timeline.events({
     "submit .new-message": function (event) {
       var text = event.target.text.value;

       Meteor.call("sendMessage", text);

       event.target.text.value = "";
       event.preventDefault();
     },

     /* scroll event */

   });
