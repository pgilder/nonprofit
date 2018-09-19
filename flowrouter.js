FlowRouter.route('/', {
    action: function(params) {
        FlowLayout.render("_defaultLayout", {main: "site"});
    }
});

FlowRouter.route('/timeline', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: "timeline"});
    }
});


FlowRouter.route('/dashboard', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: "dashboard"});
    }
});

FlowRouter.route('/search', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: "srp"});
    }
});

FlowRouter.route('/login', {
    action: function(params) {
	    FlowLayout.render("_plainLayout", {main: "login"});
    }
});


FlowRouter.route('/login', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "login"});
	}
});

FlowRouter.route('/register', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "register"});
	}
});

FlowRouter.route('/lock', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "lock"});
	}
});

FlowRouter.route('/calendar/:templateName', {
	triggersEnter: [function() {
	    $("body").addClass("no-header");
	}],
	action: function (params) {
		FlowLayout.render("_calendarLayout", {main: params.templateName});
	},
	triggersExit: [function() {
	    $("body").removeClass("no-header");
	}]
});

FlowRouter.route('/builder', {
	action: function (params) {
		FlowLayout.render("_builderLayout", {main: "pageBuilder"});
	}
});

FlowRouter.route('/layouts/boxed-layout', {
	action: function (params) {
		FlowLayout.render("_boxedLayout", {main: "boxedLayoutSample"});
	},
	triggersEnter: [function() {
	    $("body").addClass("box-layout menu-pin");
	}],
	triggersExit: [function() {
	    $("body").removeClass("box-layout menu-pin");
	}]
});

FlowRouter.route('/layouts/secondary-layout', {
	action: function (params) {
		FlowLayout.render("_secondaryLayout", {main: "secondaryLayoutSample"});
	}
});

FlowRouter.route('/layouts/horizontal-layout', {
	action: function (params) {
		FlowLayout.render("_horizontalLayout", {main: "horizontalLayoutSample"});
	},
	triggersEnter: [function() {
	    $("body").addClass("horizontal-menu ");
	}],
	triggersExit: [function() {
	    $("body").removeClass("horizontal-menu ");
	}]
});

FlowRouter.route('/error/:code', {
	action: function (params) {
		FlowLayout.render("_plainLayout", {main: "errorPage", errorCode:params.code});
	}
});

FlowRouter.route('/ui/:templateName', {
	action: function (params) {
		FlowLayout.render("_defaultLayout", {main: params.templateName});
	}
});

FlowRouter.route('/table/:templateName', {
	action: function (params) {
		FlowLayout.render("_defaultLayout", {main: params.templateName});
	}
});

FlowRouter.route('/maps/:templateName', {
	action: function (params) {

		FlowLayout.render("_fullHeightLayout", {main: params.templateName});
	}
});

FlowRouter.route('/:templateName', {
    action: function(params) {
	    FlowLayout.render("_defaultLayout", {main: params.templateName});
    }
});

FlowRouter.notFound = {
    action: function() {
        FlowLayout.render("_plainLayout", {main: "errorPage"});
    }
};

FlowRouter.route('/social/:postId', {
    name: 'Profile',
    action: function(params) {
        console.log("Yeah! We are on the post:", params.postId);
    }
});
