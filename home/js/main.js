//the login action
$("#loginAction").click(function() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            location.reload();
        } else {
            // cancelled
            location.reload();
        }
    }, { scope: 'user_photos,friends_photos' });
});

//the logout action
//The logout button
$("#logoutButton").click(function() {
  FB.logout(function(response) {
      // user is now logged out
      location.reload();
  });
});

$("#footer").sticky({bottomSpacing:0});