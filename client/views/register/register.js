Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var fname = $('[name=fname]').val();
        var lname = $('[name=lname]').val();
        var username = $('[name=username]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
          fname: fname,
          lname: lname,
          username: username,
          email: email,
          password: password
        });
        Router.go('home');
    }
});
